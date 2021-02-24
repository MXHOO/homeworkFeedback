<template>
  <div>多选题
  </div>
  <div id="subjectContent">
  </div>
  <p>选项</p>
  <div>
    <a-checkbox-group v-model:value="value">
      <a-checkbox value="A" class="option">A</a-checkbox>
      <a-checkbox value="B" class="option">B</a-checkbox>
    </a-checkbox-group>
  </div>
  <div id="optionContent">
  </div>
</template>
<script>
import { onBeforeUnmount, onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// eslint-disable-next-line no-unused-vars
import CustomizeEditor from 'wangeditor'
export default {
  setup () {
    let editor = null
    onMounted(() => {
      editor = new CustomizeEditor(document.getElementById('optionContent'))
      editor.highlight = hljs
      editor.config.showFullScreen = false
      editor.config.menus = ['bold',
        'head',
        'link',
        'italic',
        'underline',
        'code'
      ]
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