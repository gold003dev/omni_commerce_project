<script setup>
import { computed, onMounted, ref } from "vue";
//import router from "@/router";
import { useRouter } from "vue-router";

import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/authStore";
import { useAccountStore } from "@/stores/accountStore";
import { useTenantsStore } from "@/stores/tenantsStore";
import GuestLayout from "@/layout/guest-layout.vue";
import LoadingSelect from "@/components/loading-select.vue";
import LoadingButton from "@/components/loading-button.vue";

const router = useRouter();
const accountStore = useAccountStore();
const authStore = useAuthStore();
const tenantsStore = useTenantsStore();
const tenantSelectOptions = ref([]);
const loadingTenants = ref(false);

// schema
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  tenant: yup.string().required(),
});

// veevalidate form object
const { handleSubmit, defineField, errors, meta, setFieldValue } = useForm({
  validationSchema: schema,
});

// fields
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [tenant, tenantAttrs] = defineField("tenant");

// submit
const submitting = ref(false);
const loginSubmit = handleSubmit(async (values) => {
  submitting.value = true;
  if (await authStore.login(values)) {
    await accountStore.getCurrentUser();
    redirectParam ? router.push(redirectParam) : router.push("/");
  }
  submitting.value = false;
});

// on mount (load tenants)
let redirectParam = null;
onMounted(async () => {
  redirectParam = router.currentRoute.value.query.redirectFrom;
  loadingTenants.value = true;
  // await tenantsStore.getTenants();
  // tenantSelectOptions.value = tenantsStore.activeTenants.map((obj) => ({
  //   value: obj.id,
  //   text: obj.name,
  // }));
  loadingTenants.value = false;
  setFieldValue("tenant", "root");
});

// admin credentials button
const populateCredentials = () => {
  setFieldValue("email", "admin@email.com");
  setFieldValue("password", "Password123!");
};
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
            <h4 class="mt-0">Sign In</h4>
            <p class="text-muted mb-4">Enter your email address and password to access account.</p>
            <!-- Form -->
            <form @submit="loginSubmit">
              <!-- Email -->
              <b-form-group label="Email" label-for="email" class="mb-3">
                <b-form-input type="text" v-bind="emailAttrs" v-model="email" id="email" placeholder="name@example.com" />
                <b-form-invalid-feedback :state="false">{{ errors.email }}</b-form-invalid-feedback>
              </b-form-group>
              <!-- Password -->
              <b-form-group label="Password" label-for="password">
                <b-form-input type="password" v-bind="passwordAttrs" v-model="password" id="password" placeholder="Password" />
                <b-form-invalid-feedback :state="false">{{ errors.password }}</b-form-invalid-feedback>
              </b-form-group>
              <!-- Forgot Password -->
              <b-row align-h="end" class="mb-3">
                <router-link to="/forgotpassword" class="vf-link-subtext"><small>Forgot your password?</small></router-link>
              </b-row>
              <!-- Log In Button -->
              <div class="d-grid mb-0 text-center">
                <LoadingButton variant="primary" type="submit" :disabled="false" :loading="submitting">
                  <i class="mdi mdi-login"></i>
                  Log In
                </LoadingButton>
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
          <!-- Footer - Admin Credentials -->
          <footer class="footer footer-alt">
            <p class="text-muted">Demo quick access <b-button variant="outline-primary" class="m-2" @click="populateCredentials">Admin Credentials</b-button></p>
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
