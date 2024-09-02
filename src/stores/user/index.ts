import { defineStore } from 'pinia';
import { UserState } from '@/stores/types';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    loading: false,
  }),
  actions: {
    async fetchUserProfile(userId: number) {
      this.loading = true;
      try {
        // Fetch user profile logic here
        // For example: this.profile = await someApiCall(userId);
      } finally {
        this.loading = false;
      }
    },
  },
});
