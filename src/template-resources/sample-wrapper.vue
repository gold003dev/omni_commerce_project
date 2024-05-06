<template>
  <div class="card">
    <div class="card-body">
      <h4 class="header-title">{{ props.title }}</h4>
      <p class="text-muted font-14 mb-3">
        <slot name="sub-text"></slot>
      </p>
      <div>
        <slot name="preview"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
