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
    let editor = reactive({})
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
        editor.config.onchange = function (newHtml) {
          const fillList = newHtml.match(/【填空】/g)
          console.log(fillList)
        }
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
      console.log('onMounted', editor)
    })

    onBeforeUnmount(() => {
      destroyEditor()
    })
    return {
      content,
      editor
    }
  }
}
</script>