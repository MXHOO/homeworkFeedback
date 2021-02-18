<template>
  <div>
    <a-button type="primary" @click="showModal">创建作业</a-button>
    <a-modal v-model:visible="visible" title="创建题目" @ok="handleOk">
      <div id="content"></div>
    </a-modal>
  </div>
</template>
<script>
import hljs from 'highlight.js'
import Editor from 'wangeditor'
import { computed, onMounted, reactive, ref, nextTick  } from 'vue'
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
    let editor = null
    const visible = ref(false)
    const showModal = async () => {
      visible.value = true
      await nextTick()
      editor = new Editor(document.getElementById('content'))
      editor.highlight = hljs
      editor.config.showFullScreen = false
      editor.create()
    }
    let editorOption = reactive({})
    let content = ref('')
    const counter = ref(666)
    const twiceTheCounter = computed(() => counter.value * 2)
    onMounted(() => {
      
    })
    return {
      content,
      editorOption,
      counter,
      twiceTheCounter,
      visible,
      showModal
    }
  }
}
</script>