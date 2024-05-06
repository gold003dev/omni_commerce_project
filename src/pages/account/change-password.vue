<script setup>
import Layout from "@/layout/layout.vue";
import PageNavigation from "@/components/page-navigation.vue";
import LoadingButton from "@/components/loading-button.vue";
import { useAccountStore } from "@/stores/accountStore";
import { computed, ref } from "vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { menuOptions } from "./menu-options.js";

const accountStore = useAccountStore();

const schema = yup.object({
  password: yup.string().min(8).required(),
  newPassword: yup.string().min(8).required(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta, resetForm  } = useForm({
  validationSchema: schema,
});

// fields
const [password, passwordAttrs] = defineField("password");
const [newPassword, newPasswordAttrs] = defineField("newPassword");
const [confirmNewPassword, confirmNewPasswordAttrs] = defineField("confirmNewPassword");

const canProceed = computed(() => {
  return meta.value.dirty && meta.value.valid;
});

// submit
const submitting = ref(false);
const submitUpdate = handleSubmit(async (values) => {
  submitting.value = true;
  await accountStore.updatePassword(values);
  resetForm();
  submitting.value = false;
});
</script>
<template>
  <Layout>
    <!-- Page Nav Layout  -->
    <div class="page-nav-layout">
      <!-- Page Nav -->
      <div class="page-nav-layout__nav-area">
        <PageNavigation :menu-options="menuOptions"/>
      </div>
      <!-- Content -->
      <div class="page-nav-layout__content">
        <div class="card">
          <div class="card-body">
            <div class="form-block-title">Change your password</div>
            <!-- Form -->
            <form class="form-layout" @submit="submitUpdate">
              <b-form-group label="Current password" label-for="password" class="mb-2 current-password-input">
                <b-form-input type="password" v-bind="passwordAttrs" v-model="password" id="password" placeholder="Current Password" />
                <b-form-invalid-feedback :state="false">{{ errors.password }}</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="New password" label-for="newPassword" class="mb-2">
                <b-form-input type="password" v-bind="newPasswordAttrs" v-model="newPassword" id="newPassword" placeholder="New Password" />
                <b-form-invalid-feedback :state="false">{{ errors.newPassword }}</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Confirm password" label-for="confirmNewPassword" class="mb-2">
                <b-form-input type="password" v-bind="confirmNewPasswordAttrs" v-model="confirmNewPassword" id="confirmNewPassword" placeholder="Confirm Password" />
                <b-form-invalid-feedback :state="false">{{ errors.confirmNewPassword }}</b-form-invalid-feedback>
              </b-form-group>
              <!-- Save Changes -->
              <div class="form-layout__controls d-flex justify-content-end">
                <LoadingButton variant="primary" type="submit" :disabled="!canProceed" :loading="submitting">Save Changes</LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.form-layout {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  row-gap: 1rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  &__controls {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
  }
}

.current-password-input {
  grid-column: 1 / -1;
  max-width: calc(50% - 1rem);

  @media only screen and (max-width: 800px) {
    max-width: 100%;
  }
}
</style>
