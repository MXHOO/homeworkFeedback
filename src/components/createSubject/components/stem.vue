<template>
  <div id="subjectContent">
  </div>
</template>
<script>
import { onBeforeUnmount, onMounted, reactive, watch} from 'vue'
import fillMenu from '@/components/createSubject/fillMenu.js'
import editorConfig from '@/components/createSubject/editorConfig.js'
import Editor from 'wangeditor'
export default {
  props: {
    subjectType: String
  },
  setup (props) {
    const content = reactive({
      html: '',
      text: ''
    })

    let editor = null
    watch(() => props.subjectType, () => {
      destroyEditor()
      createEditor()
    })

    // 创建编辑器
    const createEditor = () => {
      editor = new Editor(document.getElementById('subjectContent'))
      if (props.subjectType === '填空') {
        const key = 'fillMenu'
        editor.menus.extend(key, fillMenu)
        editorConfig(editor)
        editor.config.menus.push(key)
      } else {
        editorConfig(editor)
      }
      editor.create()
    }

    // 销毁编辑器 
    const destroyEditor = () => {
      if (editor) {
        editor.destroy()
        editor = null
      }
    }

    onMounted(() => {
      createEditor()
    })

    onBeforeUnmount(() => {
      destroyEditor()
    })
    return {
      content
    }
  }
}
</script>