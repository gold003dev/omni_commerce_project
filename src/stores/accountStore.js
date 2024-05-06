import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { toast } from "vue3-toastify";

export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      currentUser: null,
    };
  },
  getters: {
    user: (state) => state.currentUser,
    userFullName: (state) => state.currentUser.firstName + " " + state.currentUser.lastName,

  },
  actions: {
    async getCurrentUser() {
      // const response = await agent.get("/identity/profile");
      this.currentUser = {
        roleId : 1,
        firstName : "aaa",
        lastName : "bbb",
        imageUrl : ""
      };
    },
    async updateCurrentUser(data) {
      const response = await agent.put("/identity/profile", data);
      if (!response.succeeded) {
        toast.error(response.messages[0]);
      } else {
        this.currentUser =  {
          roleId : 1,
          firstName : "aaa",
          lastName : "bbb",
          imageUrl : "image/vue.jpg"
        };
        toast.success("User updated");
      }
    },
    async updateProfileImage(formData) {
      const response = await agent.putFormData("/identity/profile-image", formData);
      if (!response.succeeded) {
        toast.error(response.messages[0]);
      } else {
        this.currentUser.imageUrl = response.data;
        toast.success("Profile image updated");
      }
    },
    async updatePassword(data) {
      const response = await agent.put("/identity/change-password", data);
      if (!response.succeeded) {
        toast.error(response.messages[0]);
      } else {
        toast.success("Password updated");
      }
    },
    // preferences - handled in layoutStore (dark mode & page size)
  },
});
