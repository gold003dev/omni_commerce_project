<template>
  <b-form-input
      data-provide="datepicker"
  />
</template>

<script>
import "bootstrap-datepicker";

export default {
  props: {id: {type: String}}
}
</script>