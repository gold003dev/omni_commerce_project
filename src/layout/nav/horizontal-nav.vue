<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <!-- Items -->
            <li class="nav-item" v-for="option in availableMenuOptions">
              <router-link :to="option.path" class="nav-link">
                <i v-if="option.icon" :class="option.iconClassList"></i>
                <span>{{ option.name }}</span>
              </router-link>
            </li>
            <SidemenuItemsHorizontal />
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { menuOptions } from "./menu-options.js";
import SidemenuItemsHorizontal from "@/template-resources/sidemenu-items-horizontal.vue";

import { useAccountStore } from "@/stores/accountStore";
import { computed } from "vue";

// filter menu options available to the current user based on role
const accountStore = useAccountStore();
const availableMenuOptions = computed(() => {
  return menuOptions.filter((item) => item.roles?.includes(accountStore.user.roleId) || !item.roles || item.roles?.length == 0);
});

onMounted(() => {
  activateMenuItems();
});

const activateMenuItems = () => {
  const links = document.getElementsByClassName("side-nav-link-ref");

  let menuItemEl = null;
  for (let i = 0; i < links.length; i++) {
    if (window.location.pathname === links[i]["pathname"]) {
      menuItemEl = links[i];
      break;
    }
  }

  if (menuItemEl) {
    const parentEl = menuItemEl.parentElement;
    // level 1
    menuItemEl.classList.add("active");
    parentEl.parentElement.classList.add("active");

    if (parentEl.parentElement.parentElement) {
      // level 2 nested
      parentEl.parentElement.parentElement.classList.add("active");
      parentEl.parentElement.parentElement.parentElement.classList.add("active");
    }
  }
};
</script>
