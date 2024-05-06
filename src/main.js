import { createApp } from "vue";
import { createPinia } from "pinia";
import "uno.css";
import App from "./App.vue";
import router from "./router";
import BootstrapVueNext from "bootstrap-vue-next";
import VueApexCharts from 'vue3-apexcharts'

import Vue3Toasity from "vue3-toastify";
import { toast } from "vue3-toastify";

import jQuery from 'jquery' // some plugins still require jQuery -- range-slider, datepicker, dragula.
window.$ = window.jQuery = jQuery


import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "vue3-toastify/dist/index.css";
import 'nprogress/nprogress.css'
import 'simplebar-vue/dist/simplebar.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'


import "@/assets/scss/nanite-theme.scss";
import "@/assets/scss/icons.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BootstrapVueNext);
app.use(VueApexCharts);
app.use(Vue3Toasity, {
  autoClose: 2500,
  theme: "colored",
  position: toast.POSITION.BOTTOM_LEFT
});
app.mount("#app");
