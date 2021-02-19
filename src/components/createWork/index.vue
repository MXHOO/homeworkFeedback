<template>
  <div>
    <a-button type="primary" @click="showModal">创建作业</a-button>
    <div id="edit"></div>
    <a-modal v-model:visible="visible" title="创建题目" @ok="handleOk">
      <p>题目类型</p>
      <a-select v-model:value="value1" style="width: 120px; margin: 10px;" ref="select" @change="selectChange">
        <a-select-option value="单选">单选题</a-select-option>
        <a-select-option value="多选">多选题</a-select-option>
        <a-select-option value="填空">填空题</a-select-option>
        <a-select-option value="主观">主观题</a-select-option>
      </a-select>
      <p>题干</p>
      <div id="content"></div>
    </a-modal>
  </div>
</template>
<script>
import {
  showModal,
  handleOk,
  editContent,
  visible,
  value1,
  selectChange
} from './index.js'
import { reactive, ref } from 'vue'
export default {
  components: {
  },
  props: {
    user: {
      type: String,
      default: '111'
    }
  },
  setup () {
    // 下拉框
    let editorOption = reactive({})
    let content = ref('')
  
    return {
      content,
      editContent,
      editorOption,
      visible,
      showModal,
      handleOk,
      value1,
      selectChange
    }
  }
}
</script>
<style scoped>
input {
  border-radius: 4px;
  margin: 5px;
}
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
</style>