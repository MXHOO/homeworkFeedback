<template>
  <div>
    <div class="logo">测试一下</div>
     <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>创建作业</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>查看作业</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>数据统计</span>
        </a-menu-item>
         <a-menu-item key="4">
          <upload-outlined />
          <span>个人信息</span>
        </a-menu-item>
      </a-menu>
  </div>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue';
export default {
  name: 'Sider',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  data() {
    return {
      selectedKeys: ['1'],
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