
<script setup>
import { ref, onMounted } from "vue";
import Layout from "@/layout/layout.vue";
import { useCampaignsStore } from "@/stores/campaignsStore";
import { useRoute } from 'vue-router';
const campaignsStore = useCampaignsStore();
const loading = ref(false);
const route = useRoute();
const campaignName = ref('');

const getCampaign = async () => {
    loading.value = true;
    const campaign = await campaignsStore.getCampaign(route.params.id);
    loading.value = false;
    campaignName.value = campaign.campaignName;
    return campaign;
};

onMounted(async () => {
    await getCampaign();
});
</script>

<template>
<Layout>
    <!-- Top Row -->
        <div>
            <div class="page-title-box">
            <h4 class="page-title">{{ campaignName }}</h4>
            </div>
        </div>

    <!-- Main Row -->
    <b-row>
        <b-col>
            <div class="card">
                <div class="card-body">
                 </div>
            </div>
        </b-col>
    </b-row>
</Layout>
</template>
