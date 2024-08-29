import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  // Add other user properties as needed
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  actions: {
    setUser(userData: User) {
      this.user = userData;
    },
    setToken(token: string) {
      this.token = token;
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
