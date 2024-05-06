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
                            <b-col> 
                                <template #default> 
                                    <div> 
                                        <b-button>Button</b-button>                                         
                                        <b-button variant="danger">Button</b-button>                                         
                                        <b-button variant="success">Button</b-button>                                         
                                        <b-button variant="outline-primary">Button</b-button>                                         
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