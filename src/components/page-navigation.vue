<template>
  <div class="card">
    <div class="card-body">
      <div class="page-nav">
        <router-link v-for="option in props.menuOptions" :to="option.path">
          <i v-if="option.icon" :class="option.iconClassList"></i>
          <span>{{ option.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuOptions: {
    type: Array,
    required: true,
  },
});

</script>
