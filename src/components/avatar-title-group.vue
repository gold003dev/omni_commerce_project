<template>
  <div class="table-profile-component">
    <div v-if="!props.hideAvatar"  class="avatar-sm me-2 d-flex align-items-center justify-content-center">
      <div v-if="!props.image" class="h-100 w-100 rounded-circle d-flex align-items-center justify-content-center bg-light">{{getInitials(props.title)}}</div>
      <img v-else class="rounded-circle w-100 h-100" :src="props.image">
    </div>
    <div class="d-flex flex-column">
      <strong v-if="props.title">{{ props.title }}</strong>
      <small v-if="props.subtitle">{{ props.subtitle }}</small>
    </div>    
  </div>
</template>

<script setup>
import getInitials from '@/utils/getInitials.js';

const props = defineProps(["title", "subtitle", "image", "hideAvatar"]);

</script>
