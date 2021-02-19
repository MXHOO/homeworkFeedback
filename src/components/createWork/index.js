import hljs from 'highlight.js'
import CustomizeEditor from './editor.js'
import Editor from 'wangeditor'
import {
  ref,
  nextTick
} from 'vue'
let editor = null
const visible = ref(false)
let editContent
const value1 = ref('')
// 创建编辑器
const createEditor = () => {
  if (value1.value === '填空') {
    editor = new CustomizeEditor(document.getElementById('content'))
  } else {
    editor = new Editor(document.getElementById('content'))
  }
  editor.highlight = hljs
  editor.config.showFullScreen = false
  editor.config.menus = ['bold',
    'head',
    'link',
    'italic',
    'underline'
  ]
  if (editContent) {
    editor.txt.setJSON(editContent)
  }
  editor.create()
}

// 打开弹窗
const showModal = async () => {
  visible.value = true
  await nextTick()
  createEditor()
}

// 题目类型改变
const selectChange = (value) => {
  console.log(value, value1.value)
  if(editor) {
    console.log(editor)
    editor.destroy()
    editor = null
    createEditor()
  }
}

// 将填空的选项替换为输入框
const replaceFill = (html) => {
  const temp = html.replace(/\[填空[1-9]+\]/g, '<input class="fillContent" style="margin: 10px;"/>')
  document.getElementById('edit').innerHTML = temp
}

// 创建题目完成
const handleOk = () => {
  editContent = editor.txt.getJSON()
  const html = editor.txt.html()
  if (value1.value === '填空') {
    replaceFill(html)
  }
  console.log('编辑框中的内容', editContent)
  visible.value = false
  editor.destroy()
  editor = null
}

export {
  showModal,
  handleOk,
  editContent,
  visible,
  value1,
  selectChange
}