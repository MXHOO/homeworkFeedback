import editorConfig from '@/components/createSubject/editorConfig.js'
import fillMenu from '@/components/createSubject/fillMenu.js'
import Editor from 'wangeditor'
import {
  ref,
  reactive
} from 'vue'
const visible = ref(false)
const subject = reactive({}) // 每个题目为一个对象
let editContent
const subjectType = ref('')
let editor = null
// 创建编辑器
const createEditor = (id) => {
  const key = 'fillMenu'
  editor = new Editor(document.getElementById(id))
  if(subjectType.value === '') {
    editor.menus.extend(key, fillMenu)
    editorConfig(editor)
    editor.config.menus.push(key)
  }
  editor.create()
  return editor
}

// 打开弹窗
const showModal = async () => {
  visible.value = true
}

const cancelModal = () => {
  if(editor) {
    editor.destroy()
    editor = null
  }
}

// 题目类型改变
const selectChange = () => {
  if(editor) {
    editor.destroy()
    editor = null
  }
}

// 将填空的选项替换为输入框
const replaceFill = (html) => { 
  const temp = html.replace(/\[填空[1-9]+\]/g, '<input class="fillContent" style="margin: 10px;"/>')
  document.getElementById('edit').innerHTML = temp
}

// 创建题目完成
const handleOk = () => {
  const html = editor.txt.html()
  if (subjectType.value === '填空') {
    replaceFill(html)
  } else {
    document.getElementById('edit').innerHTML = html
  }
  visible.value = false
  editor.destroy()
  editor = null
}

export {
  showModal,
  handleOk,
  editContent,
  visible,
  subjectType,
  selectChange,
  cancelModal,
  subject,
  createEditor
}