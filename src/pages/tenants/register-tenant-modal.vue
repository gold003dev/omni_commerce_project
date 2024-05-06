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
  id: "",
  name: "",
  adminEmail: "",
  password: "Password123!",
});

// schema
const schema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  adminEmail: yup.string().email().required(),
  password: yup.string().required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta } = useForm({
  initialValues: initialValues,
  validationSchema: schema,
});

// fields
const [id, idAttrs] = defineField("id");
const [name, nameAttrs] = defineField("name");
const [adminEmail, adminEmailAttrs] = defineField("adminEmail");
const [password, passwordAttrs] = defineField("password");

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
  emit("proceed", values);
});
</script>

<template>
  <b-modal id="standard-modal" v-model="show" title="Register New Tenant" title-class="h4" size="lg" hide-footer @cancel="close" @close="close" @hidden="close">
    <form @submit="proceed">
      <div class="form-layout">
        <b-form-group label="Key" label-for="id">
          <b-form-input type="text" v-bind="idAttrs" v-model="id" id="id" placeholder="Tenant Key" />
          <b-form-invalid-feedback :state="false">{{ errors.id }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Name" label-for="name">
          <b-form-input type="text" v-bind="nameAttrs" v-model="name" id="name" placeholder="Name" />
          <b-form-invalid-feedback :state="false">{{ errors.name }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Admin Email" label-for="adminEmail">
          <b-form-input type="text" v-bind="adminEmailAttrs" v-model="adminEmail" id="adminEmail" placeholder="name@example.com" />
          <b-form-invalid-feedback :state="false">{{ errors.adminEmail }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input type="text" v-bind="passwordAttrs" v-model="password" id="password" placeholder="Password" />
          <b-form-invalid-feedback :state="false">{{ errors.password }}</b-form-invalid-feedback>
        </b-form-group>
      </div>
    </form>
    <div class="modal-footer border-top-0">
      <b-button variant="light" @click="close">Close</b-button>
        <LoadingButton variant="primary" type="submit" :loading="loading" @click="proceed" :disabled="!canProceed">Save</LoadingButton>
    </div>
  </b-modal>
</template>
<style lang="scss" scoped>
.form-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  row-gap: 1rem;
  margin-top: 1rem;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  &__controls {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
