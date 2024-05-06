<template>
  <b-form-input :id="id" type="range" data-plugin="range-slider" />
</template>

<script setup>
import "ion-rangeslider/js/ion.rangeSlider.min.js";
import { onMounted } from "vue";

const props = defineProps({ id: { type: String } })

onMounted(() => {
  $('[data-plugin="range-slider"]').each(function () {
      var opts = $(this).data();
      $(this).ionRangeSlider(opts);
    });
});

</script>
