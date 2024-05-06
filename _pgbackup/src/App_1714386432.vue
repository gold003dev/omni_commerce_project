<template>
    <RouterView/>
</template>
<script setup>
import { onMounted } from "vue";

import { RouterView } from "vue-router";
import { useAccountStore } from "@/stores/accountStore";
import { useLayoutStore } from "@/stores/layoutStore";
import { useAuthStore } from "@/stores/AuthStore";

const layoutStore = useLayoutStore();
const accountStore = useAccountStore();
const authStore = useAuthStore();

onMounted(async () => {
  layoutStore.init();
  if (authStore.token) {
    await accountStore.getCurrentUser();
  }
});

</script>
