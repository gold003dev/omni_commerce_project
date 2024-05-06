<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          {{ year }}
          © Nano Boilerplate -
          <a href="#" target="”_blank”">OmniCommerce.com</a>
        </div>
        <div class="col-md-6">
          <div class="text-md-end footer-links d-none d-md-block">
            <span class="badge bg-success" style="font-size: 16px; margin: 0 15px">Vue UI</span>
            <a href="#" target="”_blank”">Documentation</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
