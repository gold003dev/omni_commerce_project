<script setup>
    import { onMounted, reactive, ref } from "vue";
import Layout from "@/layout/layout.vue";
import getInitials from "@/utils/getInitials.js";
import ServerTable from "@/components/tables/server-table.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();

const currentRouteName = computed(() => router.currentRoute.value.name);

const layoutStore = useLayoutStore();
const loading = ref(false);
const submitting = ref(false);
let currentPageMeta = reactive({
    pageNumber: 1,
    pageSize: layoutStore.pageSize,
    keyword: "",
    sorting: []
});



const handleParamsChange = (tableParams) => {
    currentPageMeta = tableParams;
    getCampaignsList();
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
                        <b-row> 
                            <b-col class="col-12"> 
                                <template #default> 
                                    <div class="d-sm-flex align-items-center"> 
                                        <b-button variant="primary" style="box-shadow: 0 0; font-size: 16px; font-weight: 600;">Create New  Campaign  <i class="uil-plus"></i> 
                                        </b-button>                                                                                 &nbsp; 
                                        <b-button variant="outline-primary" style="font-size: 16px;"> Export  <i class="uil-file-download"></i> 
                                        </b-button>                                         
                                    </div>                                     
                                </template>                                 
                            </b-col>                             
                        </b-row>                         
                    </div>                     
                </div>                 
            </b-col>             
        </b-row>         
    </Layout>     
</template>