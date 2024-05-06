import { defineStore } from "pinia";
import agent from "@/api/agent.js";
import { toast } from "vue3-toastify";

export const useUsersStore = defineStore("users", {
  state: () => ({
    userList: [],
  }),
  getters: {
    users: (state) => state.userList,
  },
  actions: {
    async getUsers() {
      const response = await agent.get("/identity/users");
      this.userList = response.data;
    },
    async addUser(data) {
      try {
        const response = await agent.post("/identity/users", data); 
        if(response.succeeded){
          const updatedUserList = [response.data, ...this.userList] // identity endpoint returns a complete user dto
          this.userList = updatedUserList;
          toast.success("User created");
          return true;
        } else {
          toast.error(response.messages[0]);
          return false
        }
      } catch {
        toast.error(error);
        return false
      }     
    },
    async updateUser(data) {
      try {
        const response = await agent.put(`/identity/users/${data.id}`, data);
        console.log(response);
        if(response.succeeded){
          const updatedUserList = this.userList.map((user) => (user.id === data.id ? data : user)); // identity endpoint returns a complete user dto
          this.userList = updatedUserList; 
          toast.success("User updated");
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
    async deleteUser(id) {
      try {
        const response = await agent.delete(`/identity/users/${id}`);
        if (response.succeeded) {
          const updatedUserList = this.userList.filter((user) => (user.id !== id));
          this.userList = updatedUserList; // update the userList with the new array
          toast.success("User deleted");
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
