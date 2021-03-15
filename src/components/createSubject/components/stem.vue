<template>
  <div id="subjectContent">
  </div>
</template>
<script>
import { onBeforeUnmount, onMounted, reactive, watch } from 'vue'
import fillMenu from '@/components/createSubject/fillMenu.js'
import editorConfig from '@/components/createSubject/editorConfig.js'
import Editor from 'wangeditor'
export default {
  props: {
    subjectType: String
  },
  setup (props) {
    let stemList = reactive([])
    const content = reactive({
      html: '',
      text: ''
    })
    // 用来创建输入框
    let blankList = reactive([])
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
          const list = fillList || []
          if (list.length !== blankList.length) {
            // console.log('不相等')
          } else {
            // console.log('相等就不用变')
          }
          console.log(list)
        }
      } else {
        editorConfig(editor)
      }
      editor.create()
      stemList.push(editor)
    }

    // 销毁编辑器 
    const destroyEditor = () => {
     if(stemList && stemList.length > 0) {
        stemList.forEach(item => item && item.destroy())
        stemList = []
      }
    }

    onMounted(() => {
      createEditor()
    })

    onBeforeUnmount(() => {
      destroyEditor()
    })
    return {
      content,
      editor,
      stemList
    }
  }
}
</script>