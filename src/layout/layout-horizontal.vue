<script>
// alternative horizontal navigation -- in stores/layoutStore set layoutType to 'topnav'
import Topbar from "./nav/topbar.vue";
import HorizontalNav from "./nav/horizontal-nav.vue";
import { useLayoutStore } from "@/stores/layoutStore";

export default {
  components: {
    HorizontalNav,
    Topbar,
  },
  data() {
    let html = document.getElementsByTagName("html")[0];
    return {
      useLayout: useLayoutStore(),
      showMenu: window.screen.width > 768,
      user: {},
      html,
    };
  },
  mounted() {
    this.html.setAttribute("data-layout", "topnav");
  },
  unmounted() {
    this.html.removeAttribute("data-layout");
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <Topbar />
    <HorizontalNav />
    <div class="content-page">
      <div class="content pt-3">
        <b-container fluid>
          <slot></slot>
        </b-container>
      </div>
    </div>
  </div>
</template>
