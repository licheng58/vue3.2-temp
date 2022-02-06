import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/i18n';
import '@/styles/index.scss';

import installElementPlus from './plugins/element';

// 导入 svgIcon
import installIcons from '@/icons';

// 倒入全局属性
import installFilters from '@/filters';

import installDirective from '@/directives';

// 导入页面鉴权
import '@/permission';

const app = createApp(App);
installIcons(app);
installElementPlus(app);
installFilters(app);
installDirective(app);
app.use(store).use(router).use(i18n).mount('#app');
