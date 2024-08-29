import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    fetchUsers() {
      // Implementation to fetch users
    },
  },
});
