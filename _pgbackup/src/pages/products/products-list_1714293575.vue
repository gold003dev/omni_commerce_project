<script setup>
import { onMounted, reactive, ref } from "vue";
import Layout from "@/layout/layout.vue";
import ServerTable from "@/components/tables/server-table.vue";
import ProductModal from "@/pages/products/product-modal.vue";
import { columns } from "@/pages/products/column-config.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { useProductsStore } from "@/stores/productsStore";

const layoutStore = useLayoutStore();
const productsStore = useProductsStore();
const showAddModal = ref(false);
const loading = ref(false);
const submitting = ref(false);

// table meta initial state
let currentPageMeta = reactive({
  pageNumber: 1,
  pageSize: layoutStore.pageSize,
  keyword: "",
  sorting: []
});

onMounted(async () => {
  getProductsList();
});

const handleParamsChange = (tableParams) => {
  currentPageMeta = tableParams;
  getProductsList();
};

const getProductsList = async () => {
  loading.value = true;
  await productsStore.getProductsPaginated(currentPageMeta);
  loading.value = false;
};

// modal submit
const submitCreate = async (data) => {
  submitting.value = true;
  if (await productsStore.addProduct(data)) {
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
                <b-button class="btn btn-soft-primaryy" @click="showAddModal = true">New Product</b-button>
            </b-col>
        </b-row>
        <!-- Main Row -->
        <b-row>
            <b-col>
                <ServerTable :data="productsStore.products" :columns="columns" :loading="loading" :current-page-meta="currentPageMeta" :table-pagination-meta="productsStore.paginationMeta" @on-params-change="handleParamsChange" filter-placeholder="Search Products..."/>
                <div class="mb-2">
                    <small>Server-side pagination with sorting & filtering</small>
                </div>
            </b-col>
        </b-row>
    </Layout>
    <!-- Modal (Add Product) -->
    <ProductModal v-if="showAddModal" title="Add New Product" :saving="submitting" @proceed="submitCreate" @cancel="showAddModal = false"/>
</template>
