<script setup>
import { ref } from "vue";
import ProductModal from "./product-modal.vue";
import { useProductsStore } from "@/stores/productsStore";

const productsStore = useProductsStore();
const props = defineProps(["targetProduct"]);
const show = ref(false);
const updating = ref(false);
const deleting = ref(false);

const submitUpdate = async (data) => {
  updating.value = true;
  if (await productsStore.updateProduct(data)) {
    show.value = false;
  }
  updating.value = false;
};

const submitDelete = async (id) => {
  deleting.value = true;
  if (await productsStore.deleteProduct(id)) {
    show.value = false;
  }
  deleting.value = false;
};

</script>


<template>
  <!-- Row button and Edit modal -->
  <b-button variant="soft-primary" pill @click="show = true" class="float-end">Edit</b-button>
  <ProductModal v-if="show" title="Edit Product"  :data="props.targetProduct" :saving="updating" :deleting="deleting" @proceed="submitUpdate" @proceedDelete="submitDelete" @cancel="show = false" enableDelete />
</template>


