<template>
  <div class="system-login">
    <a-form label-align="right">
      <a-form-item label="用户名：">
        <a-input v-model:value="user.account"></a-input>
      </a-form-item>
      <a-form-item label="密码：">
        <a-input v-model:value="user.account"></a-input>
      </a-form-item>
      <a-button type="primary" @click="login">登录</a-button>
    </a-form>
  </div>
</template>
<script>
import { loginHandler } from '@/services/login.js'
import { reactive } from 'vue'
export default {
  setup () {
    const user = reactive({
      account: '',
      password: ''
    })
    const login = async () => {
      await loginHandler( user)
    }
    return {
      user,
      login
    }
  }
}
</script>
<style>
.system-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>