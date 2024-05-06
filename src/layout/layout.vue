<script setup>
import Vertical from "./layout-vertical.vue";
import Horizontal from "./layout-horizontal.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { onMounted } from "vue";

const layoutStore = useLayoutStore();
onMounted(() => {
   layoutStore.initSwitchListener(); // initialize menu collapse and theme toggle buttons
});

</script>

<template>
  <Vertical v-if="layoutStore.config.layoutType === 'vertical'">
    <slot />
  </Vertical>
  <Horizontal v-if="layoutStore.config.layoutType === 'topnav'">
    <slot />
  </Horizontal>
</template>
