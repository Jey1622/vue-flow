import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import '@vue-flow/core/dist/style.css'; // Vue Flow styles
import './styles/style.css'; // Custom styles

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
