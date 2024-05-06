<script setup>
import { useAccountStore } from "@/stores/accountStore";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { computed } from "vue";

import getInitials from "@/utils/getInitials.js";

const accountStore = useAccountStore();
const authStore = useAuthStore();
const router = useRouter();

const currentRouteName = computed(() => router.currentRoute.value.name);

const fullScreenListener = () => {
  document.body.classList.toggle("fullscreen-enable");
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  } else {
    if (document["exitFullscreen"]) {
      document["exitFullscreen"]();
    }
  }
};

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>
<template>
    <div class="navbar-custom">
        <div class="topbar container-fluid">
            <div class="d-flex align-items-center gap-lg-2 gap-1">
                <!-- Brand -->
                <div class="logo-topbar">
                    <!-- Logo light -->
                    <router-link to="/" class="logo-light"><span class="logo-lg"> <img src="@/assets/images/logo.png" alt="logo"/> </span><span class="logo-sm"> <img src="@/assets/images/logo-sm.png" alt="small logo"/> </span>
                    </router-link>
                    <!-- Logo Dark -->
                    <router-link to="/" class="logo-dark"><span class="logo-lg"> <img src="@/assets/images/logo-dark.png" alt="dark logo"/> </span><span class="logo-sm"> <img src="@/assets/images/logo-sm.png" alt="small logo"/> </span>
                    </router-link>
                </div>
                <!-- Sidebar Toggle Button -->
                <button class="button-toggle-menu" id="vertical-toggle-menu"><i class="i-uit-subject"></i>
                </button>
                <!-- Horizontal Menu Toggle Button -->
                <button class="button-toggle-menu" id="horizontal-toggle-menu" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content"><i class="mdi mdi-menu"></i>
                </button>
                <ul class="breadcrumb m-0 d-none d-sm-flex">
                    <li class="breadcrumb-item active">{{ currentRouteName }}</li>
                </ul>
            </div>
            <!-- Right Side Menu (theme, profile, etc)   -->
            <ul class="topbar-menu d-flex align-items-center gap-3">
                <!-- Theme Color -->
                <li class="d-none d-sm-inline-block">
                    <div class="nav-link" id="light-dark-mode"><i class="ri-moon-line font-22"></i>
                    </div>
                </li>
                <!-- Fullscreen -->
                <li class="d-none d-md-inline-block">
                    <button class="nav-link" @click="fullScreenListener"><i class="ri-fullscreen-line font-22"></i>
                    </button>
                </li>
                <!-- Profile Dropdown -->
                <b-nav-item-dropdown toggle-class="arrow-none" class="dropdown" end>
                    <template #button-content data-bs-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                        <div class="nav-link arrow-none nav-user px-2"><span class="nav-user__avatar"> <img v-if="accountStore.user.imageUrl" :src="accountStore.user.imageUrl" alt="user-image" class="rounded-circle"/> <span v-else class="h-100 w-100 rounded-circle d-flex align-items-center justify-content-center bg-light">{{ getInitials(accountStore.userFullName) }}</span> </span><span class="d-lg-flex flex-column gap-1 d-none"> <h5 class="my-0">
                  {{ accountStore.userFullName }} </h5> <h6 class="my-0 fw-normal text-start text-capitalize">{{ accountStore.user.roleId }} User</h6> </span>
                        </div>
                    </template>
                    <!-- Account Menu -->
                    <b-dropdown-item>
                        <router-link to="/account/profile" class="dropdown-item-wrapper"><i class="mdi mdi-account-circle me-1"></i><span>Profile</span>
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <router-link to="/account/preferences" class="dropdown-item-wrapper"><i class="mdi mdi-account-edit me-1"></i><span>Preferences</span>
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <router-link to="/account/change-password" class="dropdown-item-wrapper"><i class="mdi mdi-lifebuoy me-1"></i><span>Password</span>
                        </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item @click="logout">
                        <div class="dropdown-item-wrapper"><i class="ri-logout-box-line fs-18 align-middle me-1"></i><span>Logout</span>
                        </div>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </ul>
        </div>
    </div>
</template>
