<template>
  <div>用户信息</div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const userInfo = reactive({
      username: '张三',
      email: '1298948827@qq.com'
    })
    return {
      userInfo
    }
  }
}
</script>