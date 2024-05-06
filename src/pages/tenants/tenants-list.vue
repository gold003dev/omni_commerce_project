<script setup>
import Layout from "@/layout/layout.vue";
import { useTenantsStore } from "@/stores/tenantsStore";
import ClientTable from "@/components/tables/client-table.vue";
import { onMounted, ref } from "vue";
import { columns } from "./column-config.vue";
import RegisterTenantModal from "./register-tenant-modal.vue";

const tenantsStore = useTenantsStore();
const showAddModal = ref(false);
const loading = ref(false);
const submitting = ref(false);

onMounted(async () => {
  loading.value = true;
  await tenantsStore.getTenants();
  loading.value = false;
});

const submitAddTenant = async (data) => {
  submitting.value = true;
  if (await tenantsStore.addTenant(data)) {
    showAddModal.value = false;
  }
  submitting.value = false;
};
</script>

<template>
  <Layout>
    <!-- Controls -->
    <b-row>
      <b-col class="d-flex flex-row-reverse mb-3">
        <b-button variant="primary" @click="showAddModal = !showAddModal">New Tenant</b-button>
      </b-col>
    </b-row>

    <!-- Table / Filters -->
    <b-row>
      <b-col>
        <!-- Table -->
        <ClientTable :data="tenantsStore.tenants" :columns="columns" :loading="loading" filterPlaceholder="Search Tenants..."></ClientTable>
        <div class="mb-2">
          <small>Client-side pagination with sorting & filtering</small>
        </div>      </b-col>
    </b-row>
  </Layout>

  <!-- Modals -->
  <RegisterTenantModal v-if="showAddModal" :loading="submitting" @proceed="submitAddTenant" @cancel="showAddModal = true" />
</template>
