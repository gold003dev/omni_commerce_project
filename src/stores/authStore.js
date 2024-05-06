import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { useStorage } from "@vueuse/core";
import router from "@/router";
import { toast } from "vue3-toastify";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentToken: useStorage("token", null),
    currentTenant: null,
  }),

  getters: {
    token: (state) => state.currentToken,
    tenant: (state) => state.currentTenant,
  },

  actions: {
    async login(formData) {
      this.currentTenant = formData.tenant;
      const email = formData.email;
      const password = formData.password;
      // const response = await agent.post("/tokens", { email, password }); // fix error handling
      if (email == 'admin@email.com' && password == 'Password123!') {
        // this.currentToken = response.data.token;
        this.currentToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkByb290LmNvbS5yb290IiwianRpIjoiODBjNTQxMmEtNDAzMy00YmM2LWE2YzQtODVkYmEzNTU5YmYxIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJ1aWQiOiI1NTU1NTU1NS01NTU1LTU1NTUtNTU1NS01NTU1NTU1NTU1NTUiLCJ0ZW5hbnQiOiJyb290Iiwicm9sZXMiOiJyb290IiwiZXhwIjoxNzE0ODQxMjU4LCJpc3MiOiJDb3JlSWRlbnRpdHkiLCJhdWQiOiJDb3JlSWRlbnRpdHlVc2VyIn0.wj2i-8wwUoZ7xqA7RkPpt627JpwdYuj-T4LflfZKi6U";
        toast.success("Login success");
        return true;
      } else {
        toast.error("Login failed");
      }
    },
    async forgotPassword(formData) {
      this.currentTenant = formData.tenant;
      const email = formData.email;
      const response = await agent.post("/identity/forgot-password", { email });
      if (!response.succeeded) {
        toast.error(response.messages[0]);
      } else {
        toast.success("Sent password reset to email");
        return true;
      }
    },
    async resetPassword(formData) {
      this.currentTenant = formData.tenant;
      const response = await agent.post("/identity/reset-password", formData);
      if (!response.succeeded) {
        toast.error(response.messages[0]);
      } else {
        toast.success("Password reset success");
        return true;
      }
    },
    logout() {
      this.currentToken = null;
      return router.push("/");
    },
  },
});
