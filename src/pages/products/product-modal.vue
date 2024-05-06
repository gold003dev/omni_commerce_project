<script setup>
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import LoadingButton from "@/components/loading-button.vue";

const emit = defineEmits(["proceed", "cancel", "proceedDelete"]);

// props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
  saving: {
    type: Boolean,
    default: false,
  },
  deleting: {
    type: Boolean,
    default: false,
  },
  enableDelete: {
    type: Boolean,
    default: false,
  },
});

// initial values
const initialValues = ref({
  name: props.data?.name || "",
  description: props.data?.description || "",
});

// schema
const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta } = useForm({
  initialValues: initialValues,
  validationSchema: schema,
});

// fields
const [name, nameAttrs] = defineField("name");
const [description, descriptionAttrs] = defineField("description");

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
  let updatedProduct = { ...props.data, ...values }; // get the original row object and overwrite any updated fields with new values
  emit("proceed", updatedProduct);
});

const proceedDelete = handleSubmit(() => {
  emit("proceedDelete", props.data.id);
});
</script>

<template>
  <b-modal v-model="show" :title="title" title-class="h4" size="lg" hide-footer @cancel="close" @close="close" @hidden="close">
    <div class="">
      <form @submit="proceed" class="my-2">
        <b-form-group label="Name" label-for="name" class="mb-2" style="max-width: 400px">
          <b-form-input type="text" v-bind="nameAttrs" v-model="name" id="name" />
          <b-form-invalid-feedback :state="false">{{ errors.name }}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Description" label-for="description">
          <b-form-textarea type="text" rows="3" v-bind="descriptionAttrs" v-model="description" />
          <b-form-invalid-feedback :state="false">{{ errors.description }}</b-form-invalid-feedback>
        </b-form-group>
      </form>
    </div>
    <div class="modal-footer footer-controls border-top-0">
      <div class="footer-controls__left">
        <LoadingButton v-if="enableDelete" variant="danger" type="submit" :loading="deleting" @click="proceedDelete" :disabled="saving">Delete</LoadingButton>
      </div>
      <div class="footer-controls__right">
        <b-button variant="light" @click="close">Close</b-button>
        <LoadingButton variant="primary" type="submit" :loading="saving" @click="proceed" :disabled="!canProceed">Save</LoadingButton>
      </div>
    </div>
  </b-modal>
</template>
