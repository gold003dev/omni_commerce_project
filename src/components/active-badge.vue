<template>
  <strong class="text-capitalize" :class="badgeClass">{{ badgeText }}</strong>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["isActive"]);

const badgeClass = computed(() => {
  switch (props.isActive) {
    case true:
      return "text-success";
    case false:
      return "text-danger";
  }
});

const badgeText = computed(() => {
  switch (props.isActive) {
    case true:
      return "Yes";
    case false:
      return "No";
  }
});
</script>
