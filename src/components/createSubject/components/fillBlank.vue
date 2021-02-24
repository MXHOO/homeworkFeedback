<template>
  <div id="optionContent">
  </div>
</template>
<script>
import editorConfig from '@/components/createSubject/editorConfig.js'
import fillMenu from '@/components/createSubject/fillMenu.js'
import E from 'wangeditor'
import { onBeforeUnmount, onMounted } from 'vue'
export default {
  setup () {
    let editor = null
    onMounted(() => {
      editor = new E(document.getElementById('optionContent'))
      const key = 'fillMenu'
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