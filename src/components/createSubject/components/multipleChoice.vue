<template>
  <div id="optionContent">
  </div>
  <!-- <div>
    <a-checkbox-group v-model:value="checked">
      <a-checkbox value="A" class="option">A</a-checkbox>
      <a-checkbox value="B" class="option">B</a-checkbox>
    </a-checkbox-group>
  </div> -->
</template>
<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import 'highlight.js/styles/github.css'
import editorConfig from '@/components/createSubject/editorConfig.js'
import Editor from 'wangeditor'
export default {
  setup () {
    const checked = ref('')
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
    return {
      checked
    }
  }
}
</script>