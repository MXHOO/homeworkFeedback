<template>
  <div>
    <a-row>
      <a-form layout="inline">
        <a-form-item>
          <a-input></a-input>
        </a-form-item>
        <a-form-item>
          <a-input></a-input>
        </a-form-item>
      </a-form>
    <a-col :span="6">
    </a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6"><a-button type="primary" @click="showModal">创建作业</a-button></a-col>
  </a-row>
    
    <a-modal title="创建作业"  v-model:visible="visible" @onCancel="cancelModal" @onOk="cancelModal">
      <a-form>
        <a-form-item label="作业名字">
          <a-input v-model="work.homework_name"></a-input>
        </a-form-item>
        <a-form-item label="作业须知">
          <a-input type="textarea" v-model="work.homework_notice"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
    <div id="edit"></div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const work = reactive({
      homework_name: '',
      homework_notice: ''
    })
    const visible = ref(false)
    const showModal = () => {
      visible.value = true
    }
    const cancelModal = () => {
      visible.value = false
    }
    return {
      work,
      visible,
      showModal,
      cancelModal
    }
  }
}
</script>