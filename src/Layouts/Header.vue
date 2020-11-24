<template>
  <div>
    <a-row>
      <a-col :offset="22" :span="2">
        <a-avatar :size="45">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  name: 'Header',
  components: {
    UserOutlined,
  }
}
</script>