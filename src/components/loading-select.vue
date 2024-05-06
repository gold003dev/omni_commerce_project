<template>
  <b-form-group :label="label">
    <div v-if="loading" class="loading-select-group">
      <select class="form-select" ></select>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    </div>
    <b-form-select v-else v-bind="$attrs" :options="options" />
  </b-form-group>
</template>

<script setup>
const { loading, options, label } = defineProps(["loading", "options", "label"]);
</script>

<style lang="scss" scoped>
.loading-select-group {
  position: relative;

  span {
    position: absolute;
    top: 11px;
    left: 20px;
  }
}
</style>
