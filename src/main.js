import { createApp } from 'vue'
import { store } from './store/index'
import { router } from './router/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
// import Loading from 'ant-design-vue'
const app = createApp(App)
app.component()
app.use(Antd).use(store).use(router).mount('#app')
