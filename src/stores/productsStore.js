import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { toast } from "vue3-toastify";

export const useProductsStore = defineStore("products", {
  state: () => ({
    productList: {},
    paginationMetaData: {},
  }),

  getters: {
    products: (state) => state.productList,
    paginationMeta: (state) => state.paginationMetaData
  },
  actions: {
    async getProducts() {
      const response = await agent.get("/products"); // get full list
      this.productList = response.data;
    },
    async getProductsPaginated(data) {
      const response = await agent.post("/products/products-paginated", data); // get server-paginated list
      this.productList = response.data;
      delete response.data;
      this.paginationMetaData = response;
    },
    async addProduct(data) {
      try {
        const response = await agent.post("/products", data);
        if (response.succeeded) {
          data.id = response.data;
          data.createdOn = new Date().toISOString();
          this.productList = [data, ...this.productList];
          toast.success("New product added");
          return true;
        } else {
          toast.error(response.messages[0]);
          return false;
        }
      } catch (error) {
        toast.error(error);
        return false;
      }
    },
    async updateProduct(data) {
      try {
        const response = await agent.put(`/products/${data.id}`, data);
        if (response.succeeded) {
          const updatedProductList = this.productList.map((product) => (product.id === data.id ? data : product));
          this.productList = updatedProductList; // update the productList with the new array
          toast.success("Product updated");
          return true;
        } else {
          toast.error(response.messages[0]);
          return false;
        }
      } catch (error) {
        toast.error(error);
        return false;
      }
    },
    async deleteProduct(id) {
      try {
        const response = await agent.delete(`/products/${id}`);
        if (response.succeeded) {
          const updatedProductList = this.productList.filter((product) => (product.id !== id));
          this.productList = updatedProductList; // update the productList with the new array
          toast.success("Product deleted");
          return true;
        } else {
          toast.error(response.messages[0]);
          return false;
        }
      } catch (error) {
        toast.error(error);
        return false;
      }
    }
  },
});
