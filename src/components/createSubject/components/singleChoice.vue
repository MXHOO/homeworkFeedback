<template>
  <div>
    <a-button type="primary" @click="addOption">增加选项</a-button>
  </div>
  <div>
    <a-radio-group v-model:value="rightAnswer" button-style="solid">
      <a-radio class="radio" v-for="(item, index) in optionList" :value="item.value" :label="item.label" :key="item.value">
        <p class="title">选项{{index}}</p>
        <div  class="option markdown" :id="'option_' + index"></div>
        <div class="minus"><MinusCircleOutlined @click="removeOption(item)"/></div>
      </a-radio>
    </a-radio-group>
  </div>
  <div id="optionContent">
  </div>
</template>
<script>
import { MinusCircleOutlined } from '@ant-design/icons-vue'
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import 'highlight.js/styles/github.css'
import editorConfig from '@/components/createSubject/editorConfig.js'
import Editor from 'wangeditor'
export default {
  components: {
    MinusCircleOutlined
  },
  setup () {
    const rightAnswer = ref('')
    const optionList = reactive([])
    const result = reactive({})
    let editor = null
    // 新增选项
    const addOption = function () {
      optionList.push({ id: 'option', label: '', value: '' })
      console.log(optionList.length)
      nextTick(() => {
        const element = document.getElementById(`option_${optionList.length-1}`)
        const temp = new Editor(element)
        editorConfig(temp)
        temp.create()
      })
    }
    // 移除选项
    const removeOption = function (item) {
      optionList.splice(item, 1)
    }
    onMounted(() => {
      editor = new Editor(document.getElementById('optionContent'))
      editorConfig(editor)
      editor.create()
    })
    onBeforeUnmount(() => {
      if (editor) {
        editor.destroy()
        editor = null
      }
    })
    return {
      optionList,
      rightAnswer,
      addOption,
      removeOption,
      result
    }
  }
}
</script>
<style scoped>
.radio {
  display: block;
  position: relative;
}
.title .minus .markdown{
  position: absolute;
}
.title {
  width: 30px;
}
.markdown {
  top: 0;
  left: 30px;
}
</style>