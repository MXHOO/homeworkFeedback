<template>
  <div>
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item v-for="item in menuContent" :key="item.key">
        <user-outlined />
        <span>{{item.text}}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import menu from '../data/menu.json'
import {
  UserOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
export default {
  name: 'Sider',
  components: {
    UserOutlined,
    // UploadOutlined
  },
  setup () {
    const menuContent = ref(menu)
    return {
      menuContent
    }
  },
  data () {
    return {
      selectedKeys: ['work_lib'],
      collapsed: false,
    };
  },
}
</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  font-size: 20px;
  text-align: center;
  color: aliceblue;
}
</style>