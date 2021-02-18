import { createApp } from 'vue'
import { store } from './store/index'
import { router } from './router/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
createApp(App).use(Antd).use(store).use(router).mount('#app')
