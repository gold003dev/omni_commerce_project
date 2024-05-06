<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h4 class="header-title">{{ title }}</h4>
      <div class="float-end">
        <b-dropdown toggle-class="arrow-none card-drop p-0" variant="white" right>
          <template v-slot:button-content>
            <i class="mdi mdi-dots-vertical"></i>
          </template>
          <b-dropdown-item href="javascript:void(0);">Sales Report</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0);">Export Report</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0);">Profit</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0);">Action</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <simplebar class="card-body py-0 mb-3" :style="`max-height:${activityWindowHeight}`">
      <div class="timeline-alt py-0">
        <div v-for="activity of activityData" :key="activity.id" class="timeline-item">
          <i :class="`mdi ${activity.icon} bg-${activity.color}-lighten text-${activity.color} timeline-icon`"></i>
          <div class="timeline-item-info">
            <a href="#" :class="`text-${activity.color} fw-bold mb-1 d-block`">{{ activity.title }}</a>
            <small>
              {{ activity.text }}
              <span class="fw-bold">{{ activity.boldText }}</span>
            </small>
            <p class="mb-0 pb-2">
              <small class="text-muted">{{ activity.subtext }}</small>
            </p>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";

export default {
  components: {
    simplebar,
  },
  props: {
    title: {
      type: String,
      default: "Recent Activity",
    },
    activityWindowHeight: {
      type: String,
      default: "424",
    },
    activityData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
