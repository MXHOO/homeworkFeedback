<template>
  <div>-=-------------------------</div>
  <div id="subjectContent">
  </div>
  <p>选项</p>
  <div id="optionContent">
  </div>
</template>
<script>
// import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import editorConfig from './editorConfig.js'
import fillMenu from './fillMenu.js'
import E from 'wangeditor'
import { onBeforeUnmount, onMounted } from 'vue'
export default {
  setup () {
    let editor = null
    onMounted(() => {
      const key = 'fillMenu'
      editor = new E(document.getElementById('subjectContent'))
      editor.menus.extend(key, fillMenu)
      editorConfig(editor)
      editor.config.menus.push(key)
      editor.create()
    })
    onBeforeUnmount(() => {
      if (editor) {
        editor.destroy()
        editor = null
      }
    })
    return {
    }
  }
}
</script>