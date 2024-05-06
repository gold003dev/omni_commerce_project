<template>
  <div class="card widget-flat">
    <div class="card-body">
      <div class="float-end">
        <i :class="`mdi ${icon} widget-icon `"></i>
      </div>
      <h5 class="text-muted fw-normal mt-0" :title="`${title}`">{{ title }}</h5>
      <h3 class="mt-3 mb-3">{{ number }}</h3>
      <p class="mb-0 text-muted">
        <span class="me-2" :class="`text-${color}`">
          <i :class="{ 'mdi mdi-arrow-down-bold': `${color}` === 'danger', 'mdi mdi-arrow-up-bold': `${color}` === 'success' }"></i>
          {{ subtext }}
        </span>
        <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "primary",
    },
    title: {
      type: String,
      default: "",
    },
    number: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "success",
    },
    bgColor: {
      type: String,
      default: "primary",
    },
    subtext: {
      type: String,
      default: "",
    },
  },
};
</script>
