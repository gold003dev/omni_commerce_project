<script setup>
import { ref, defineProps } from "vue";
import { useCampaignsStore } from "@/stores/campaignsStore";
import { useRouter } from "vue-router";

const router = useRouter();
const campaignsStores = useCampaignsStore();
const props = defineProps(["targetCampaign"]);
const updating = ref(false);
const deleting = ref(false);

const editCampaign = (id) => {
  router.push({ name: 'Edit Campaign', params: { id } });
};

const submitUpdate = async (data) => {
  updating.value = true;
  if (await campaignsStores.updateCampaign(data)) {
    show.value = false;
  }
  updating.value = false;
};

const submitDelete = async (id) => {
  deleting.value = true;
  if (await campaignsStores.deleteCampaign(id)) {
    show.value = false;
  }
  deleting.value = false;
};

</script>


<template>
  <!-- Row button and Edit modal -->
  <b-button variant="soft-primary" pill  class="float-end" @click="editCampaign(targetCampaign.id)"><i class="mdi mdi-square-edit-outline  action-icon"></i></b-button>

</template>


