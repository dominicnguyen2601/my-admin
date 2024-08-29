<template>
  <a-layout class="dashboard-layout">
    <a-layout-header>
      <a-menu mode="horizontal">
        <a-menu-item key="dashboard">Dashboard</a-menu-item>
        <a-menu-item key="logout" @click="logout">Logout</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="dashboard-content">
      <a-card title="User Information" class="user-card">
        <p><strong>ID:</strong> {{ user?.id }}</p>
        <p><strong>Name:</strong> {{ user?.name }}</p>
        <!-- Add more user information as needed -->
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push('/login');
    };

    return {
      user: authStore.user,
      logout,
    };
  },
});
</script>

<style scoped lang="less">
.dashboard-layout {
  min-height: 100vh;
}

.dashboard-content {
  padding: 24px;
}

.user-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
