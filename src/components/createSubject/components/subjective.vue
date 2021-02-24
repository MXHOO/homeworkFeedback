<template>
  <p>选项</p>
  <div id="optionContent">
  </div>
</template>
<script>
import { onBeforeUnmount, onMounted } from 'vue'
import 'highlight.js/styles/github.css'
import editorConfig from '@/components/createSubject/editorConfig.js'
import Editor from 'wangeditor'
export default {
  setup () {
    let editor = null
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
  }
}
</script>