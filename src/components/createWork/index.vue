<template>
  <div>
    <a-button type="primary" @click="showModal">创建作业</a-button>
    <div id="edit"></div>
    <a-modal v-model:visible="visible" title="创建题目" @ok="handleOk" @cancel="cancelModal" width="800px">
      <h3>题目类型</h3>
      <a-select v-model:value="subjectType" style="width: 120px; margin: 10px;" ref="select" @change="selectChange">
        <a-select-option value="单选">单选题</a-select-option>
        <a-select-option value="多选">多选题</a-select-option>
        <a-select-option value="填空">填空题</a-select-option>
        <a-select-option value="主观">主观题</a-select-option>
      </a-select>
      <div>
        <h3>题目部分</h3>
        <stem :subjectType="subjectType"></stem>
      </div>
      <div>
        <h3>选项部分</h3>
        <singleChoice ref="singleChoiceRef" v-if="subjectType === '单选'"></singleChoice>
        <multipleChoice ref="multipleChoiceRef" v-if="subjectType === '多选'"></multipleChoice>
        <fillBlank ref="fillBlankRef"  v-if="subjectType === '填空'"></fillBlank>
        <subjective ref="subjectiveRef" v-if="subjectType === '主观'"></subjective>
      </div>
      <div>
        <h3>分值</h3>
         <a-input-number v-model:value="score" :min="1" :max="10" />
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
  cancelModal,
  singleChoiceRef,
  multipleChoiceRef,
  subjectiveRef,
  fillBlankRef,
  score
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
      default: ''
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
      cancelModal,
      singleChoiceRef,
      multipleChoiceRef,
      subjectiveRef,
      fillBlankRef,
      score
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