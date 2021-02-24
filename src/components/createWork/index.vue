<template>
  <div>
    <a-button type="primary" @click="showModal">创建作业</a-button>
    <div id="edit"></div>
    <a-modal v-model:visible="visible" title="创建题目" @ok="handleOk" @cancel="cancelModal">
      <p>题目类型</p>
      <a-select v-model:value="subjectType" style="width: 120px; margin: 10px;" ref="select" @change="selectChange">
        <a-select-option value="单选">单选题</a-select-option>
        <a-select-option value="多选">多选题</a-select-option>
        <a-select-option value="填空">填空题</a-select-option>
        <a-select-option value="主观">主观题</a-select-option>
      </a-select>
      <div>
        题目部分
        <stem :subjectType="subjectType"></stem>
      </div>
      <div>
        选项部分
        <singleChoice v-if="subjectType === '单选'"></singleChoice>
        <multipleChoice v-if="subjectType === '多选'"></multipleChoice>
        <fillBlank v-if="subjectType === '填空'" ref="fillBlank"></fillBlank>
        <subjective v-if="subjectType === '主观'"></subjective>
      </div>
    </a-modal>
  </div>
</template>
<script>
import {
  showModal,
  handleOk,
  editContent,
  visible,
  subjectType,
  selectChange,
  cancelModal
} from './index.js'
import singleChoice from '@/components/createSubject/components/singleChoice.vue'
import multipleChoice from '@/components/createSubject/components/multipleChoice.vue'
import subjective from '@/components/createSubject/components/subjective.vue'
import fillBlank from '@/components/createSubject/components/fillBlank.vue'
import stem from '@/components/createSubject/components/stem.vue'
import { reactive, ref, onMounted } from 'vue'
export default {
  components: {
    singleChoice,
    multipleChoice,
    subjective,
    fillBlank,
    stem
  },
  props: {
    user: {
      type: String,
      default: '111'
    }
  },
  setup () {
    onMounted(() => {
    })
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
      subjectType,
      selectChange,
      cancelModal
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