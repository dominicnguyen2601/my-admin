import { defineStore } from 'pinia';
// import Cookies from 'js-cookie';
import { signIn, getUserInfo, logout } from '@/api/auth';
import { AuthState } from '@/stores/types';

export const useAuthStore = defineStore('authentication', {
  state: (): AuthState => ({
    // token: Cookies.get('auth-token') || null,
    token: null,
    user: null,
    loading: false,
  }),
  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        const { token, user } = await signIn(email, password);
        // Cookies.set('auth-token', token, { expires: 7 });
        this.token = token;
        this.user = user;
      } finally {
        this.loading = false;
      }
    },
    async fetchUser() {
      if (!this.token) return;
      this.loading = true;
      try {
        this.user = await getUserInfo(this.token);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      await logout();
      // Cookies.remove('auth-token');
      this.token = null;
      this.user = null;
    },
  },
});
