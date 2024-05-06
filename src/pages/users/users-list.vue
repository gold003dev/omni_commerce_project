<script setup>
import Layout from "@/layout/layout.vue";
import { useUsersStore } from "@/stores/usersStore";
import ClientTable from "@/components/tables/client-table.vue";
import { onMounted, ref } from "vue";
import RegisterUserModal from "./register-user-modal.vue";
import { columns } from "@/pages/users/column-config.vue";

const usersStore = useUsersStore();
const showAddModal = ref(false);
const loading = ref(false);
const submitting = ref(false);

onMounted(async () => {
  loading.value = true;
  await usersStore.getUsers();
  loading.value = false;
});

const submitCreate = async (data) => {
  submitting.value = true;
  if (await usersStore.addUser(data)) {
    showAddModal.value = false;
  }
  submitting.value = false;
};
</script>

<template>
  <Layout>
    <!-- Top Row -->
    <b-row>
      <b-col class="d-flex flex-row-reverse mb-3">
        <b-button variant="primary" @click="showAddModal = !showAddModal">New User</b-button>
      </b-col>
    </b-row>

    <!-- Main Row  -->
    <b-row>
      <b-col>
        <!-- Table -->
        <ClientTable :data="usersStore.users" :columns="columns" :loading="loading" filterPlaceholder="Search Users..."></ClientTable>
        <div class="mb-2">
          <small>Client-side pagination with sorting & filtering</small>
        </div>
      </b-col>
    </b-row>
  </Layout>

  <!-- Modal (Add User) -->
  <RegisterUserModal v-if="showAddModal" :loading="submitting" @proceed="submitCreate" @cancel="showAddModal = false" />
</template>
