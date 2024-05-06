<template>
  <div class="card">
    <div class="d-flex card-header justify-content-between align-items-center">
      <h4 class="header-title">Revenue By Location</h4>
      <div class="float-end">
        <b-dropdown toggle-class="arrow-none card-drop p-0" variant="black" right>
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

    <div class="card-body py-0">
      <div v-for="(loc, index) in locationData" :key="index">
        <h5 class="mb-1 mt-0 fw-normal">{{ loc.location }}</h5>
        <div class="progress-w-percent">
          <span class="progress-value fw-bold">{{ loc.progress }}k </span>
          <div class="progress progress-sm">
            <div class="progress-bar" role="progressbar" :style="`width: ${loc.progress}%;`" :aria-valuenow="loc.progress" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      locationData: [
        {
          location: "New York",
          progress: 72,
        },
        {
          location: "San Francisco",
          progress: 39,
        },
        {
          location: "Sydney",
          progress: 25,
        },
        {
          location: "Singapore",
          progress: 61,
        },
        {
          location: "Lima",
          progress: 89,
        },
        {
          location: "Bogota",
          progress: 19,
        },
        {
          location: "Berlin",
          progress: 22,
        },
        {
          location: "Cairo",
          progress: 12,
        },
      ],

    };
  },

};
</script>
