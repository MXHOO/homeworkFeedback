import { createApp } from 'vue'
import { store } from './store/index'
import { router } from './router/index'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
if(process.env.NODE_ENV === 'production') {
  app.config.productionTip = false
}
console.log(app.config)
app.use(Antd).use(store).use(router).mount('#app')
