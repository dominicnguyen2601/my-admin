import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import setupAntDesign from '@/plugins/antd';

const app = createApp(App);

setupAntDesign(app);

app.use(createPinia());
app.use(router);
app.mount('#app');
