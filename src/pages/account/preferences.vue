<script setup>
import Layout from "@/layout/layout.vue";
import PageNavigation from "@/components/page-navigation.vue";
import LoadingButton from "@/components/loading-button.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { toast } from "vue3-toastify";
import { menuOptions } from "./menu-options.js";

import { computed, ref } from "vue";
import { useForm } from "vee-validate";

const layoutStore = useLayoutStore();

const pageSizeOptions = [5, 10, 25, 50];

const initialValues = {
  darkMode: layoutStore.theme == "dark" ? true : false,
  pageSize: layoutStore.pageSize,
};

// veevalidate form object
const { handleSubmit, defineField, meta, setTouched  } = useForm({
  initialValues: initialValues,
});

const [darkMode, darkModeAttrs] = defineField("darkMode");
const [pageSize, pageSizeAttrs] = defineField("pageSize");

const canProceed = computed(() => {
  return meta.value.dirty && meta.value.valid;
});

// submit
const submitting = ref(false);
const submitUpdate = handleSubmit((values) => {
  layoutStore.changeLayoutColor(values.darkMode ? "dark" : "light");
  layoutStore.changePageSize(values.pageSize);
  toast.success("Preferences updated");
});
</script>

<template>
  <Layout>
    <div class="page-nav-layout">
      <div class="page-nav-layout__nav-area">
        <PageNavigation :menu-options="menuOptions" />
      </div>
      <div class="page-nav-layout__content">
        <div class="card">
          <div class="card-body">
            <div class="form-block-title">Update your preferences</div>
            <!-- Form -->
            <form @submit="submitUpdate" class="d-flex flex-column gap-3">
              <b-form-checkbox v-bind="darkModeAttrs" v-model="darkMode" switch> Dark mode default </b-form-checkbox>
              <b-form-group label="Page Size" label-for="pageSize" class="mb-2" style="max-width: 200px">
                <b-form-select v-bind="pageSizeAttrs" v-model="pageSize" :options="pageSizeOptions" id="pageSize"></b-form-select>
              </b-form-group>
              <!-- Save Changes -->
              <div class="d-flex justify-content-end">
                <LoadingButton variant="primary" type="submit" :disabled="!canProceed" :loading="submitting">Save Changes</LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
