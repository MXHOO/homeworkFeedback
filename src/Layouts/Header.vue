<template>
  <div class="main_header">
    <a-row>
      <a-col :offset="22" :span="2">
        <a-popover trigger="hover">
          <template #content>
            <span class="logout" @click="logout">退出</span>
          </template>
          <a-avatar :size="45">
            <template #icon><UserOutlined /></template>
          </a-avatar>
        </a-popover>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { getCurrentInstance } from 'vue';
export default {
  name: 'Header',
  components: {
    UserOutlined,
  },
  setup() {
    const {ctx} = getCurrentInstance()
    const logout = function() {
      ctx.$router.push({path: '/login'})
    }
    return {
      logout
    }
  }
}
</script>
<style scoped>
.logout:hover {
  color: blue;
  cursor: pointer;
}
</style>