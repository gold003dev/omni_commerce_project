<script setup>
import simplebar from "simplebar-vue";
import { onMounted } from "vue";
import { menuOptions } from "./menu-options.js";
import { adminMenuOptions } from "./admin-menu-options.js";
import { useAccountStore } from "@/stores/accountStore";
import { computed } from "vue";
import SidemenuItems from "@/template-resources/sidemenu-items.vue"

// filter menu options available to the current user based on role
const accountStore = useAccountStore();
const availableMenuOptions = computed(() => {
  return menuOptions.filter((item) => item.roles?.includes(accountStore.user.roleId) || !item.roles || item.roles?.length == 0);
});

const availableAdminOptions = computed(() => {
  return adminMenuOptions.filter((item) => item.roles?.includes(accountStore.user.roleId) || !item.roles || item.roles?.length == 0);
});

onMounted(() => {
  activateMenuItems();
  initSidenav();
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
    // level 0
    menuItemEl.classList.add("active");
    parentEl.classList.add("menuitem-active");

    if (parentEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement) {
      // level 2 nested
      parentEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("menuitem-active");
      parentEl.parentElement.parentElement.parentElement.classList.add("menuitem-active");
      parentEl.parentElement.parentElement.parentElement.children[0].classList.add("active");
      parentEl.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("show");
      parentEl.parentElement.parentElement.classList.add("show");
    } else {
      // level 1 nested
      parentEl.parentElement.parentElement.parentElement.classList.add("menuitem-active");
      parentEl.parentElement.parentElement.classList.add("show");
    }
  }
};

const initSidenav = () => {
  setTimeout(function () {
    let activatedItem = document.querySelector < HTMLElement > ".side-nav-link-ref.active";
    if (activatedItem != null) {
      let simplebarContent = document.querySelector(".leftside-menu .simplebar-content-wrapper");
      let offset = activatedItem.offsetTop - 300;
      if (simplebarContent && offset > 100) {
        scrollTo(simplebarContent, offset, 600);
      }
    }
  }, 200);

  // scrollTo (Sidenav Active Menu)
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function scrollTo(element, to, duration) {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
    let animateScroll = function () {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }
};
</script>
<template>
    <div class="leftside-menu">
        <!-- Brand Logo Light -->
        <router-link to="/" class="logo logo-light"><span class="logo-lg"> <img src="@/assets/images/logo.png" alt="logo"/> </span><span class="logo-sm"> <img src="@/assets/images/logo-sm.png" alt="small logo"/> </span>
        </router-link>
        <!-- Brand Logo Dark -->
        <router-link to="/" class="logo logo-dark"><span class="logo-lg"> <img src="@/assets/images/logo-dark.png" alt="dark logo"/> </span><span class="logo-sm"> <img src="@/assets/images/logo-sm.png" alt="small logo"/> </span>
        </router-link>
        <!-- Menu Container -->
        <simplebar class="h-100" id="leftside-menu-container">
            <!--- Menu -->
            <ul class="side-nav">
                <li class="side-nav-item">
                    <router-link to="/dashboard" class="side-nav-link side-nav-link-ref">
                        <i class="ri-dashboard-line"></i>
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <!-- Ecommerce -->
                <li class="side-nav-title mt-3"><span>Ecommerce Management</span>
                </li>
                <li class="side-nav-item" role="button"><a v-b-toggle.sidebarPorfolio class="side-nav-link"> <i class="i-bytesize-portfolio"></i> <span>Portfolio</span> <span class="menu-arrow"></span> </a>
                    <b-collapse id="sidebarPorfolio">
                        <ul class="side-nav">
                            <li class="side-nav-item" v-for="option in availableMenuOptions">
                                <router-link :to="option.path" class="side-nav-link side-nav-link-ref" "><i v-if="option.icon" :class="option.iconClassList"></i><span>{{ option.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </b-collapse>
                </li>
                <li class="side-nav-title mt-3"><span>Administration</span>
                </li>
                <!-- Admin Zone -->
                <li class="side-nav-item" role="button"><a v-b-toggle.sidebarAdmin class="side-nav-link"> <i class="uil-sliders-v-alt"></i> <span>Settings</span> <span class="menu-arrow"></span> </a>
                    <b-collapse id="sidebarAdmin">
                        <ul class="side-nav">
                            <li class="side-nav-item" v-for="option in availableAdminOptions">
                                <router-link :to="option.path" class="side-nav-link side-nav-link-ref"><i v-if="option.icon" :class="option.iconClassList"></i><span>{{ option.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </b-collapse>
                </li>
            </ul>
            <div class="clearfix"></div>
        </simplebar>
    </div>
</template>
