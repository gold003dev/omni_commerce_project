<script setup>
import { ref, computed, onMounted } from "vue";
import EditUserModal from "./edit-user-modal.vue";
import { useUsersStore } from "@/stores/usersStore";
import { useAccountStore } from "@/stores/accountStore";

const usersStore = useUsersStore();
const accountStore = useAccountStore();

const props = defineProps(["targetUser"]);
const show = ref(false);
const updating = ref(false);
const deleting = ref(false);

const submitUpdate = async (data) => {
  updating.value = true;
  if (await usersStore.updateUser(data)) {
    show.value = false;
  }
  updating.value = false;
};

const submitDelete = async (id) => {
  deleting.value = true;
  if (await usersStore.deleteUser(id)) {
    show.value = false;
  }
  deleting.value = false;
};

const allowEdit = computed(() => {
  if( accountStore.user.id == props.targetUser?.id){
    return false;
  } else if (props.targetUser?.roleId == 'root'){
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
  <EditUserModal v-if="show" :saving="updating" :deleting="deleting" :data="props.targetUser" @proceed="submitUpdate" @proceedDelete="submitDelete" @cancel="show = false" />

</template>


