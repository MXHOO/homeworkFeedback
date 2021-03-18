<template>
  <div class="system-login">
    <a-form label-align="right">
      <a-form-item label="用户名：">
        <a-input v-model:value="user.account"></a-input>
      </a-form-item>
      <a-form-item label="密码：">
        <a-input v-model:value="user.password"></a-input>
      </a-form-item>
      <a-button type="primary" @click="login">登录</a-button>
    </a-form>
  </div>
</template>
<script>
// import { loginHandler } from '@/services/login.js'
import {useRouter} from 'vue-router'
import { reactive } from 'vue'
export default {
  setup () {
    const router = useRouter()
    const user = reactive({
      account: '',
      password: ''
    })
    const login = async () => {
      // const data =  await loginHandler(user)
      // console.log('请求回来的token', data)
      router.push({path: '/work_lib'})

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