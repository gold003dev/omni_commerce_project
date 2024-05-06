<template>
  <span class="badge badge-lg text-light" :class="badgeClass">{{ role }}</span>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["role"]);

const badgeClass = computed(() => {
  switch (props.role) {
    case "root":
      return "bg-success";
    case "admin":
      return "bg-success";
    case "editor":
      return "bg-info";
    case "basic":
      return "bg-info";
  }
});
</script>
