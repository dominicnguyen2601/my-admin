<template>
  <a-layout class="login-layout">
    <a-layout-content class="login-content">
      <a-card title="Superadmin Login" class="login-card">
        <a-form
          :model="loginForm"
          @submit.prevent="handleLogin"
        >
          <a-form-item label="Username">
            <a-input v-model="loginForm.username" placeholder="Enter your username" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password v-model="loginForm.password" placeholder="Enter your password" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" block>Login</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import apiClient from '@/api/index';
import { LOGIN_ENDPOINT } from '../api/endpoints';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const loginForm = reactive({
      username: '',
      password: '',
    });

    const handleLogin = async () => {
      try {
        const response = await apiClient.post(LOGIN_ENDPOINT, {
          username: loginForm.username,
          password: loginForm.password,
        });

        // Set the user and token in the store
        authStore.setUser(response.data.user);
        authStore.setToken(response.data.token);

        // Navigate to the dashboard
        router.push('/dashboard');
      } catch (error) {
        // message.error('Login failed. Please check your credentials.');
      }
    };

    return {
      loginForm,
      handleLogin,
    };
  },
});
</script>

<style scoped lang="less">
.login-layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  width: 100%;
  max-width: 400px;
}

.login-card {
  width: 100%;
}
</style>
