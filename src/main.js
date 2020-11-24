import { createApp } from 'vue'
import { store } from './store/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
createApp(App).use(Antd).use(store) .mount('#app')
