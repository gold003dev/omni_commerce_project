<script setup>
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import LoadingButton from "@/components/loading-button.vue";

const emit = defineEmits(["proceed", "cancel"]);

//props
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
  firstName: "",
  lastName: "",
  email: "",
  password: "Password123!",
  phoneNumber: "",
  roleId: "basic",
});

// schema
const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  roleId: yup.string().required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta } = useForm({
  initialValues: initialValues,
  validationSchema: schema,
});

// fields
const [firstName, firstNameAttrs] = defineField("firstName");
const [lastName, lastNameAttrs] = defineField("lastName");
const [email, emailAttrs] = defineField("email");
const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber");
const [password, passwordAttrs] = defineField("password");
const [roleId, roleIdAttrs] = defineField("roleId");

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
  <b-modal id="standard-modal" v-model="show" title="Register New User" title-class="h4" size="lg" hide-footer @cancel="close" @close="close" @hidden="close">
    <form @submit="proceed">
      <div class="form-layout">
        <b-form-group label="First Name" label-for="firstName">
          <b-form-input type="text" v-bind="firstNameAttrs" v-model="firstName" id="firstName" placeholder="First Name" />
          <b-form-invalid-feedback :state="false">{{ errors.firstName }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Last Name" label-for="lastName">
          <b-form-input type="text" v-bind="lastNameAttrs" v-model="lastName" id="lastName" placeholder="Last Name" />
          <b-form-invalid-feedback :state="false">{{ errors.lastName }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Email" label-for="email">
          <b-form-input type="email" v-bind="emailAttrs" v-model="email" id="email" placeholder="name@example.com" />
          <b-form-invalid-feedback :state="false">{{ errors.email }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Phone" label-for="phoneNumber">
          <b-form-input type="tel" v-bind="phoneNumberAttrs" v-model="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
          <b-form-invalid-feedback :state="false">{{ errors.phoneNumber }}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input type="text" v-bind="passwordAttrs" v-model="password" id="password" placeholder="Password" />
          <b-form-invalid-feedback :state="false">{{ errors.password }}</b-form-invalid-feedback>
        </b-form-group>
      </div>

      <div class="form-block-title">Role Assignment</div>
      <div class="d-inline-flex flex-wrap">
        <div class="radio-group me-2 mb-1">
          <input name="roleId" type="radio" class="radio-group__input" id="registerAdminRole" value="admin" v-bind="roleIdAttrs" v-model="roleId" />
          <label for="registerAdminRole" class="radio-group__label">
            <span class="radio-group__label__button"></span>
            <div class="radio-group__label__text">
              <div class="radio-group__label__text__title">Admin</div>
            </div>
          </label>
        </div>

        <div class="radio-group me-2 mb-1">
          <input name="roleId" type="radio" class="radio-group__input" id="registerEditorRole" value="editor" v-bind="roleIdAttrs" v-model="roleId" />
          <label for="registerEditorRole" class="radio-group__label">
            <span class="radio-group__label__button"></span>
            <div class="radio-group__label__text">
              <div class="radio-group__label__text__title">Editor</div>
            </div>
          </label>
        </div>

        <div class="radio-group me-2 mb-1">
          <input name="roleId" type="radio" class="radio-group__input" id="registerBasicRole" value="basic" v-bind="roleIdAttrs" v-model="roleId" />
          <label for="registerBasicRole" class="radio-group__label">
            <span class="radio-group__label__button"></span>
            <div class="radio-group__label__text">
              <div class="radio-group__label__text__title">Basic</div>
            </div>
          </label>
        </div>
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
  margin-bottom: 2rem;
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
