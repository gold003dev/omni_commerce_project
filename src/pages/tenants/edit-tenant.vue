<script setup>
import { ref, computed } from "vue";
import EditTenantModal from "./edit-tenant-modal.vue";
import { useTenantsStore } from "@/stores/tenantsStore";

const tenantsStore = useTenantsStore();
const props = defineProps(["targetTenant"]);
const show = ref(false);
const updating = ref(false);

const submitUpdate = async (data) => {
  updating.value = true;
  if (await tenantsStore.updateTenant(data)) {
    show.value = false;
  }
  updating.value = false;
};

const allowEdit = computed(() => {
  if( props.targetTenant.id == 'root'){
    return false;
  } else { 
    return true;
  }
})

</script>


<template>
  <!-- Row button and Edit modal -->
  <b-button v-if="allowEdit" variant="soft-primary" pill @click="show = true" class="float-end">Edit</b-button>
  <strong v-else class="float-end text-primary">N/A</strong>

  <EditTenantModal v-if="show" :loading="updating" :data="props.targetTenant" @proceed="submitUpdate" @cancel="show = false" />

</template>


