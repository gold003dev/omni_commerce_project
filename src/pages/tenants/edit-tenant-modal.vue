<script setup>
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import LoadingButton from "@/components/loading-button.vue";

const emit = defineEmits(["proceed", "cancel"]);

// props
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// initial values
const initialValues = ref({
  name: props.data?.name || "",
  isActive: props.data?.isActive || false,
});

// schema
const schema = yup.object({
  isActive: yup.bool().required(),
  name: yup.string().required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta } = useForm({
  initialValues: initialValues,
  validationSchema: schema,
});

const [isActive, isActiveAttrs] = defineField("isActive");
const [name, nameAttrs] = defineField("name");

const canProceed = computed(() => {
  return meta.value.dirty && meta.value.valid;
});

// modal proceed / close
const show = ref(true);
const close = async () => {
  show.value = false;
  emit("cancel");
};
const proceed = handleSubmit((values) => {
  let updatedTenant = { ...props.data, ...values }; // get the original row object and overwrite any updated fields with new values
  emit("proceed", updatedTenant);
});
</script>

<template>
  <b-modal id="standard-modal" v-model="show" title="Edit Tenant" title-class="h4" size="lg" :loading="loading" hide-footer @cancel="close" @close="close" @hidden="close">
    <form @submit="proceed">
      <div class="form-layout">
        <b-form-checkbox v-bind="isActiveAttrs" v-model="isActive" switch> Is Active</b-form-checkbox>
        <b-form-group label="Name" label-for="name">
          <b-form-input type="text" v-bind="nameAttrs" v-model="name" />
          <b-form-invalid-feedback :state="false">{{ errors.name }}</b-form-invalid-feedback>
        </b-form-group>
      </div>
    </form>
    <div class="modal-footer footer-controls border-top-0">
      <div class="footer-controls__left"></div>
      <div class="footer-controls__right">
        <b-button variant="light" @click="close">Close</b-button>
        <LoadingButton variant="primary" type="submit" :loading="loading" @click="proceed" :disabled="!canProceed">Save</LoadingButton>
      </div>
    </div>
  </b-modal>
</template>

<style lang="scss" scoped>
.form-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  row-gap: 1rem;
  margin-top: 1rem;

  &__controls {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
