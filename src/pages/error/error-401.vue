<script setup>
import GuestLayout from "@/layout/guest-layout.vue";
</script>

<template>
  <GuestLayout>
    <b-row class="justify-content-center">
      <b-col col lg="4">
        <div class="text-center">
          <h1 class="text-error mt-5">401</h1>
          <h4 class="text-uppercase text-danger mt-3">Unauthorized</h4>
          <p class="text-muted mt-3">It's looking like you don't have suffiencient access levels to view this page. Click the button below to return to the main page of the application.</p>
          <router-link class="btn btn-info mt-3" to="/"><i class="mdi mdi-reply"></i> Return To Application</router-link>
        </div>
      </b-col>
    </b-row>
  </GuestLayout>
</template>


