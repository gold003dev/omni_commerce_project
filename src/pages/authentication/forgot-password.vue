<script setup>
import { computed, onMounted, ref } from "vue";
import { useForm } from "vee-validate";

import * as yup from "yup";
import { useAuthStore } from "@/stores/authStore";
import { useTenantsStore } from "@/stores/tenantsStore";

import GuestLayout from "@/layout/guest-layout.vue";
import LoadingSelect from "@/components/loading-select.vue";
import LoadingButton from "@/components/loading-button.vue";

const schema = yup.object({
  email: yup.string().email().required(),
  tenant: yup.string().required(),
});

const authStore = useAuthStore();
const tenantsStore = useTenantsStore();
const tenantSelectOptions = ref([]);
const loadingTenants = ref(false);

// veevalidate form object
const { handleSubmit, defineField, errors, meta, setFieldValue } = useForm({
  validationSchema: schema,
});

// fields
const [email, emailAttrs] = defineField("email");
const [tenant, tenantAttrs] = defineField("tenant");

const canProceed = computed(() => {
  return meta.value.dirty && meta.value.valid;
});

// submit
const submitting = ref(false);
const forgotPasswordSubmit = handleSubmit(async (values) => {
  submitting.value = true;
  await authStore.forgotPassword(values);
  submitting.value = false;
});

onMounted(async () => {
  loadingTenants.value = true;
  await tenantsStore.getTenants();
  tenantSelectOptions.value = tenantsStore.activeTenants.map((obj) => ({
    value: obj.id,
    text: obj.name,
  }));
  loadingTenants.value = false;
  setFieldValue("tenant", "root"); // or use tenantSelectOptions.value[0] to select first value
});
</script>

<template>
  <GuestLayout>
    <div class="auth-fluid">
      <!-- Left Side -->
      <div class="auth-fluid-form-box">
        <div class="card-body d-flex flex-column h-100 gap-3">
          <!-- Logo -->
          <div class="auth-brand text-center text-lg-start">
            <router-link to="/" class="logo-dark">
              <span><img src="@/assets/images/logo-dark.png" alt="dark logo" /></span>
            </router-link>
            <router-link to="/" class="logo-light">
              <span><img src="@/assets/images/logo.png" alt="logo" /></span>
            </router-link>
          </div>
          <!-- Main -->
          <div class="my-auto">
            <!-- Title-->
            <h4 class="mt-0">Forgot Password</h4>
            <p class="text-muted mb-4">Enter your email address to receive a password reset link</p>
            <!-- Form -->
            <form @submit="forgotPasswordSubmit">
              <!-- Email -->
              <b-form-group label="Email" label-for="email" class="mb-3">
                <b-form-input type="text" v-bind="emailAttrs" v-model="email" id="email" placeholder="name@example.com" />
                <b-form-invalid-feedback :state="false">{{ errors.email }}</b-form-invalid-feedback>
              </b-form-group>
              <!-- Submit -->
              <div class="d-grid mb-0 text-center">
                <LoadingButton variant="primary" type="submit" :disabled="!canProceed" :loading="submitting"> Submit </LoadingButton>
              </div>
              <!-- Tenant Dropdown -->
              <div class="mt-3">
                <small class="d-sm-flex d-none"> Specify the tenant with the dropdown. The Nano Boilerplate can resolve tenants by subdomain in real deployments. </small>
                <div class="mt-1 w-50">
                  <LoadingSelect v-bind="tenantAttrs" v-model="tenant" id="tenant" :loading="loadingTenants" :options="tenantSelectOptions" label="Tenant" />
                </div>
              </div>
            </form>
          </div>
          <!-- Footer -->
          <footer class="footer footer-alt">
            <router-link class="text-muted float-end" to="/login"><small>Return to Login</small></router-link>
          </footer>
        </div>
      </div>
      <!-- Right Side (slash screen) -->
      <div class="auth-fluid-right text-center">
        <div class="auth-fluid-right__logo">
          <img src="@/assets/images/logo-lg.png" alt="small logo" />
        </div>
        <div class="auth-user-testimonial">
          <img src="@/assets/images/vue.png" class="mb-2"/>

          <h4 class="mb-1">Nano ASP.NET Boilerplate</h4>
          <p class="mb-3">Vue UI</p>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
