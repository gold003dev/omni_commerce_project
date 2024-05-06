<script setup>
import Layout from "@/layout/layout.vue";
import PageNavigation from "@/components/page-navigation.vue";
import { menuOptions } from "./menu-options.js";

import LoadingButton from "@/components/loading-button.vue";
import { useAccountStore } from "@/stores/accountStore";
import { computed, ref } from "vue";
import * as yup from "yup";
import { useForm } from "vee-validate";

const accountStore = useAccountStore();

const initialValues = {
  email: accountStore.user?.email,
  firstName: accountStore.user?.firstName,
  lastName: accountStore.user?.lastName,
  phoneNumber: accountStore.user?.phoneNumber,
};

const schema = yup.object({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
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

const canProceed = computed(() => {
  return meta.value.dirty && meta.value.valid;
});

// submit
const submitting = ref(false);
const submitUpdate = handleSubmit(async (values) => {
  submitting.value = true;
  try {
    await accountStore.updateCurrentUser(values);
  } catch (error) {
    console.log("error occured");
  } finally {
    submitting.value = false;
  }
});

// upload image
const uploading = ref(false);
const uploadImage = async (evt) => {
  const file = evt.target?.files?.[0];
  const imageRequest = {
    ImageFile: file,
  };
  uploading.value = true;
  await accountStore.updateProfileImage(imageRequest);
  uploading.value = false;
};
</script>

<template>
  <Layout>
    <!-- Page Nav Layout  -->
    <div class="page-nav-layout">
      <!-- Page Nav -->
      <div class="page-nav-layout__nav-area">
        <PageNavigation :menu-options="menuOptions" />
      </div>
      <!-- Content -->
      <div class="page-nav-layout__content">
        <div class="card">
          <div class="card-body">
            <div class="form-block-title">Edit your profile</div>
            <!-- Profile Avatar -->
            <div class="profile-avatar profile-avatar--large mb-2">
              <!-- Image -->
              <div class="profile-avatar__image-area">
                <i v-if="!accountStore.user.imageUrl" class="mdi mdi-account-outline"></i>
                <img v-else :src="accountStore.user.imageUrl" id="profileImage" />
                <span v-if="uploading" class="spinner-border avatar text-primary" role="status" aria-hidden="true"></span>
              </div>
              <!-- File Upload -->
              <label class="profile-avatar__cta">
                <i class="mdi mdi-camera"></i>
                <input type="file" style="display: none" id="profileImageInput" @change="uploadImage" />
              </label>
              <!-- Title -->
              <div class="profile-avatar__title-group">
                <div class="profile-avatar__title-group__title text-capitalize" id="nameDisplay">{{ accountStore.user.firstName }} {{ accountStore.user.lastName }}</div>
                <div class="profile-avatar__title-group__sub text-capitalize" id="roleDisplay">{{ accountStore.user.roleId }} Level User</div>
              </div>
              <div class="spinner-border text-primary" style="display: none; position: absolute; top: 0; right: 0" id="uploadImageSubmitSpinner"></div>
            </div>
            <!-- Form -->
            <form class="form-layout" @submit="submitUpdate">
              <b-form-group label="First Name" label-for="firstName" class="mb-2">
                <b-form-input type="text" placeholder="First name" v-bind="firstNameAttrs" v-model="firstName" id="firstName" />
                <b-form-invalid-feedback :state="false">{{ errors.firstName }}</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Last name" label-for="lastName" class="mb-2">
                <b-form-input type="text" placeholder="Last name" v-bind="lastNameAttrs" v-model="lastName" id="lastName" />
                <b-form-invalid-feedback :state="false">{{ errors.lastName }}</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Email" label-for="email" class="mb-2">
                <b-form-input type="email" placeholder="Email" v-bind="emailAttrs" v-model="email" id="email" />
                <b-form-invalid-feedback :state="false">{{ errors.email }}</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Phone number" label-for="phoneNumber" class="mb-2">
                <b-form-input type="text" placeholder="Phone number" v-bind="phoneNumberAttrs" v-model="phoneNumber" id="phoneNumber" />
                <b-form-invalid-feedback :state="false">{{ errors.phoneNumber }}</b-form-invalid-feedback>
              </b-form-group>
              <!-- Save Changes -->
              <div class="form-layout__controls">
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
</style>
