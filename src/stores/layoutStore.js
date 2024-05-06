import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";


// to apply new defaultConfig, in browser application/localStorage clear __CONFIG__

const defaultConfig = {
  theme: "light", // -- dark, light
  topbarColor: "light", // -- dark, light
  menuColor: "dark", // -- dark, light
  sidenavSize: "default", // -- default, compact, condensed, fullscreen
  layoutType: "vertical", // -- vertical, topnav (horizontal)
  layoutMode: "fluid", // -- fluid, boxed, detached
  layoutPosition: "fixed", // -- fixed, scrollable
  pageSize: 5, // -- 5, 10, 25, 50
};


const html = document.getElementsByTagName("html")[0];
export const useLayoutStore = defineStore("layout", {
  state: () => {
    return {
      config: useStorage("__CONFIG__", {
        ...defaultConfig,
      }),
    };
  },
  getters: {
    pageSize: (state) => state.config.pageSize,
    theme: (state) => state.config.theme,
  },
  actions: {
    init() {
      html.setAttribute("data-bs-theme", this.config.theme);
      html.setAttribute("data-menu-color", this.config.menuColor);
      html.setAttribute("data-topbar-color", this.config.topbarColor);
      html.setAttribute("data-layout-mode", this.config.layoutMode);
      html.setAttribute("data-layout-position", this.config.layoutPosition);
      html.setAttribute("data-layout", this.config.layoutType);

      if (this.config.layoutType == "vertical") {
        let size = this.config.sidenavSize;
        if (window.innerWidth <= 767) {
          size = "full";
        } else if (window.innerWidth >= 767 && window.innerWidth <= 1140) {
          if (this.config.sidenavSize !== "full" && this.config.sidenavSize !== "fullscreen") {
            size = "condensed";
          }
        }
        html.setAttribute("data-sidenav-size", size);
      }

      this.initWindowSize(); // set side menu state on initialize
      this._adjustLayout();
    },

    changeLeftbarSize(size, save = true) {
      html.setAttribute("data-sidenav-size", size);
      if (save) {
        this.config.sidenavSize = size;
      }
    },

    changeLayoutColor(color) {
      this.config.theme = color;
      html.setAttribute("data-bs-theme", color);
    },

    changePageSize(size) {
      this.config.pageSize = size;
    },

    // initialize button elements (toggle side menu, close, theme switch)
    initSwitchListener() {
      var self = this;

      // Topbar theme toggle
      var themeColorToggle = document.getElementById("light-dark-mode");
      if (themeColorToggle) {
        themeColorToggle.addEventListener("click", function (e) {
          if (self.config.theme === "light") {
            self.changeLayoutColor("dark");
          } else {
            self.changeLayoutColor("light");
          }
        });
      }

      // side menu condense toggle
      var menuToggleBtn = document.querySelector("#vertical-toggle-menu");
      if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", function () {
          var configSize = self.config.sidenavSize;
          var size = html.getAttribute("data-sidenav-size");

          if (size === "full") {
            self.showBackdrop();
          } else {
            if (configSize == "fullscreen") {
              if (size === "fullscreen") {
                self.changeLeftbarSize(configSize == "fullscreen" ? "default" : configSize, false);
              } else {
                self.changeLeftbarSize("fullscreen", false);
              }
            } else {
              if (size === "condensed") {
                self.changeLeftbarSize(configSize == "condensed" ? "default" : configSize, true);
              } else {
                self.changeLeftbarSize("condensed", true);
              }
            }
          }

          html.classList.toggle("sidebar-enable");
        });
      }

      // horizonal layout
      let horizontalMenuToggleBtn = document.querySelector("#horizontal-toggle-menu");
      if (horizontalMenuToggleBtn) {
        let horizontalMenu = document.getElementById("topnav-menu-content");
        horizontalMenuToggleBtn.addEventListener("click", () => {
          if (horizontalMenu?.classList.contains("show")) {
            return horizontalMenu?.classList.remove("show");
          }
          horizontalMenu?.classList.add("show");
        });
      }

      // close full sidebar (in mobile view or fullwidth)
      var menuCloseBtn = document.querySelector(".button-close-fullsidebar");
      if (menuCloseBtn) {
        menuCloseBtn.addEventListener("click", function () {
          html.classList.remove("sidebar-enable");
          self.hideBackdrop();
        });
      }

      // hover side menu button
      var hoverBtn = document.querySelectorAll(".button-sm-hover");
      hoverBtn.forEach(function (element) {
        element.addEventListener("click", function () {
          var size = html.getAttribute("data-sidenav-size");
          if (size === "sm-hover-active") {
            self.changeLeftbarSize("sm-hover", false);
          } else {
            self.changeLeftbarSize("sm-hover-active", false);
          }
        });
      });
    },

    // show & hide side menu backdrop
    showBackdrop() {
      const backdrop = document.createElement("div");
      backdrop.id = "custom-backdrop";
      backdrop.classList.add("offcanvas-backdrop", "fade", "show");
      document.body.appendChild(backdrop);
      document.body.style.overflow = "hidden";
      if (window.innerWidth > 767) {
        document.body.style.paddingRight = "15px";
      }
      const self = this;
      backdrop.addEventListener("click", function (e) {
        html.classList.remove("sidebar-enable");
        self.hideBackdrop();
      });
    },

    hideBackdrop() {
      var backdrop = document.getElementById("custom-backdrop");
      if (backdrop) {
        document.body.removeChild(backdrop);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    },

    // window resize ajust side menu
    initWindowSize() {
      var self = this;
      window.addEventListener("resize", function (e) {
        self._adjustLayout();
      });
    },

    _adjustLayout() {
      var self = this;
      html.classList.remove("sidebar-enable");
      self.hideBackdrop();
      if (window.innerWidth <= 767.98) {
        self.changeLeftbarSize("full", false);
      } else if (window.innerWidth >= 767 && window.innerWidth <= 1140) {
        if (self.config.sidenavSize !== "full" && self.config.sidenavSize !== "fullscreen") {
          self.changeLeftbarSize("condensed", false);
        }
      } else {
        self.changeLeftbarSize(self.config.sidenavSize, false);
      }
    },
  },
});
