import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { toast } from "vue3-toastify";

export const useCampaignsStore = defineStore("campaigns", {
  state: () => ({
    campaignList: {},
    paginationMetaData: {},
  }),
  getters: {
    campaigns: (state) => state.campaignList,
    paginationMeta: (state) => state.paginationMetaData,
  },
  //
  actions: {

    // Get all campaigns
    async getCampaigns() {
      const response = await agent.get("/campaigns"); // get full list
      this.campaignList = response.data;
    },

    // Get campaigns paginated
    async getCampaignsPaginated(data) {
      const response = await agent.post("/campaigns/campaigns-paginated", data); // get server-paginated list
      this.campaignList = response.data;
      delete response.data;
      this.paginationMetaData = response;
    },

    // Get campaign by id
    async getCampaign(id) {
      const response = await agent.get(`/campaigns/${id}`);
      return response.data;
    },

    // Add new campaign
    async addCampaign(data) {
      try {
        const response = await agent.post("/campaigns", data);
        if (response.succeeded) {
          data.id = response.data;
          data.createdOn = new Date().toISOString();
          this.campaignList = [data, ...this.campaignList];
          toast.success("New campaign added");
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

    // Update campaign
    async updateCampaign(data) {
      try {
        const response = await agent.put(`/campaigns/${data.id}`, data);
        if (response.succeeded) {
          const updatedCampaignList = this.campaignList.map((campaign) => (campaign.id === data.id ? data : campaign));
          this.campaignList = updatedCampaignList; // update the campaignList with the new array
          toast.success("Campaign updated");
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
  // Delete campaign
    async deleteCampaign(id) {
      try {
        const response = await agent.delete(`/campaigns/${id}`);
        if (response.succeeded) {
          this.campaignList = this.campaignList.filter((campaign) => campaign.id !== id);
          toast.success("Campaign deleted");
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
  },
});