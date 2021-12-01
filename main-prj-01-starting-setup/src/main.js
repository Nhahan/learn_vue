import { createApp } from 'vue';

import router from './router.js'
import App from './App.vue';

const app = createApp({}).mount(App);

app.use(router);

app.mount('#app');