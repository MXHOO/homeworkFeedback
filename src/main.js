import { createApp } from 'vue'
import { store } from './store/index'
// import { route } from './router/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import EditorQuill from 'vue-quill-editor'
createApp(App).use(Antd).use(EditorQuill).use(store).mount('#app')
