import { createApp } from 'vue'
import { store } from './store/index'
import { router } from './router/index'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import {Spin} from 'ant-design-vue'
const app = createApp(App)
app.config.globalProperties.$loading = Spin
window.app = app
app.use(Antd).use(store).use(router).mount('#app')
