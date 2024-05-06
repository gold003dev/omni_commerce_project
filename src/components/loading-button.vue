<template>
  <!-- $attrs is a special object that contains all the attributes (except class and style) passed to the component. It allows to pass attributes dynamically to child component without explicitly defining them in as props in child. -->
  <b-button v-bind="$attrs">
    <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span>
      <slot></slot>
    </span>
  </b-button>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

// const emit = defineEmits('click')
</script>
