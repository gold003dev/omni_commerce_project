<template>
  <span class="badge badge-lg text-white" :class="badgeClass">{{ type }}</span>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps(["type"]);

const badgeClass = computed(() => {
  switch (props.type) {
    case "Ecommerce":
      return "bg-success";
    case "Landers":
      return "bg-danger";
    case "Phone":
      return "bg-info";
    default:
      return "";
  }
});
</script>


