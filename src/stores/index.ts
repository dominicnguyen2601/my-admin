import { createPinia } from 'pinia';
import { useAuthStore } from './authentication';
import { useUserStore } from './user';

const pinia = createPinia();

export { useAuthStore, useUserStore };
export default pinia;
