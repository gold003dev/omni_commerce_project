import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { toast } from "vue3-toastify";

export const useTenantsStore = defineStore("tenants", {
  state: () => ({
    tenantList: [],
    activeTenantsList: [],
  }),

  getters: {
    tenants: (state) => state.tenantList,
    activeTenants: (state) => state.activeTenantsList
  },
  actions: {
    async getTenants() {
      const response = await agent.get("/tenants");
      if (!response.succeeded) {
        toast.error("Error retrieving tenant list");
      } else {
        this.tenantList = response.data;
        this.activeTenantsList = this.tenantList.filter(x => x.isActive == true);
        return true;
      }   
    },
    async addTenant(data) {
      try {
        const response = await agent.post("/tenants", data);
        if (response.succeeded) {
          data.id = response.data;
          data.createdOn = new Date().toISOString();
          this.tenantList = [response.data, ...this.tenantList];
          toast.success("New tenant added");
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
    async updateTenant(data) {
      try {
        const response = await agent.put(`/tenants/${data.id}`, data);
        if (response.succeeded) {
          const updatedTenantList = this.tenantList.map((tenant) => (tenant.id === data.id ? data : tenant));
          this.tenantList = updatedTenantList; // update the tenantList with the new array
          toast.success("Tenant updated");
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
    setTargettenant(tenant) {
      this.targetTenant = tenant
    }
  },
});
