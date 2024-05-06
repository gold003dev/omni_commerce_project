<script setup>
defineProps({
  id: {
    required: true,
  },
});

const emit = defineEmits(["edit"]);
</script>

<template>
  <b-button variant="soft-primary" pill @click="emit('edit', id)">Edit</b-button>
</template>
