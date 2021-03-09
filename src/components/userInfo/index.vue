<template>
  <div>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="名字">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="班级">
      <a-input v-model:value="formState.class" />
    </a-form-item>
    <a-form-item label="专业">
      <a-input v-model:value="formState.major" />
    </a-form-item>
    <a-form-item label="邮箱">
      <a-input v-model:value="formState.mail" />
    </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
     const formState = reactive({
      name: '',
      mail: '',
      desc: '',
    });
    return {
      formState
    }
  }
}
</script>