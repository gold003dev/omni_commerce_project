<script setup>
import { onMounted, reactive, ref } from "vue";
import Layout from "@/layout/layout.vue";
import ServerTable from "@/components/tables/server-table.vue";
import { columns } from "@/pages/campaigns/column-config.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { useCampaignsStore } from "@/stores/campaignsStore";


const campaignsStore = useCampaignsStore();
const layoutStore = useLayoutStore();
const loading = ref(false);

// table meta initial state
let currentPageMeta = reactive({
    pageNumber: 1,
    pageSize: layoutStore.pageSize,
    keyword: "",
    sorting: []
});

onMounted(async () => {
    getCampaignsList();
});

const handleParamsChange = (tableParams) => {
    currentPageMeta = tableParams;
    getCampaignsList();
};

const getCampaignsList = async () => {
    loading.value = true;
    await campaignsStore.getCampaignsPaginated(currentPageMeta);
    loading.value = false;
};
</script>
<template>
    <Layout>
        <!-- Top Row -->
        <div>
            <div class="page-title-box">
                <h4 class="page-title">Campaigns List</h4>
            </div>
        </div>
        <!-- Main Row -->
        <b-row>
            <b-col>
                <div class="card">
                    <div class="card-body">
                        <b-row class="mb-3">
                            <b-col class="d-flex card-header justify-content-between align-items-center">
                                <template #default>

                                    <div>
                                        <b-button variant="primary" class="me-1"
                                            style="box-shadow: 0 0; font-size: 16px; font-weight: 600;">New
                                            Campaign <i class="uil-plus"></i>
                                        </b-button>
                                        <b-button variant="outline-primary" class="me-1"
                                            style="font-size: 16px;">
                                            Export <i class="uil-export"></i>
                                        </b-button>
                                    </div>
                                </template>
                            </b-col>
                        </b-row>
                        <ServerTable :data="campaignsStore.campaigns" :columns="columns" :loading="loading"
                            :current-page-meta="currentPageMeta" :table-pagination-meta="campaignsStore.paginationMeta"
                            @on-params-change="handleParamsChange" filter-placeholder="Search Campaigns..." />
                        <div class="mb-2">
                            <small>Server-side pagination with sorting & filtering</small>
                        </div>

                    </div>
                </div>
            </b-col>
        </b-row>
    </Layout>
</template>