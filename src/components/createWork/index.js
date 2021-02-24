import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Editor from 'wangeditor'
// eslint-disable-next-line no-unused-vars
// import CustomizeEditor from './editor.js'
import {
  ref,
  nextTick,
  reactive
} from 'vue'
const visible = ref(false)
const subject = reactive({}) // 每个题目为一个对象
let editContent
const subjectType = ref('')
let editor = null
// 创建编辑器
// eslint-disable-next-line no-unused-vars
const createEditor = (id) => {
  let editor = null
  editor = new Editor(document.getElementById(id))
  editor.highlight = hljs
  editor.config.showFullScreen = false
  editor.config.menus = ['bold',
    'head',
    'link',
    'italic',
    'underline',
    'code'
  ]
  if (editContent) {
    editor.txt.setJSON(editContent)
  }
  return editor
}

// 打开弹窗
const showModal = async () => {
  visible.value = true
  await nextTick()
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
  // editContent = editor.txt.getJSON()
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
  subject
}