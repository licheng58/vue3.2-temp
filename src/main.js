import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/index.scss';
import installElementPlus from './plugins/element';

// 导入 svgIcon
import installIcons from '@/icons';

const app = createApp(App);
installIcons(app);
installElementPlus(app);
app.use(store).use(router).mount('#app');
