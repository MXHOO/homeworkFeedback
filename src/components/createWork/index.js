import editorConfig from '@/components/createSubject/editorConfig.js'
import fillMenu from '@/components/createSubject/fillMenu.js'
import 'highlight.js/styles/github.css'
import Editor from 'wangeditor'
import {
  ref,
  reactive
} from 'vue'
const visible = ref(false)
const subject = reactive({}) // 每个题目为一个对象
let editContent
const subjectType = ref('填空')
const score = ref(0)
// 不同题型对应的数据
const singleChoiceRef = ref(null)
const multipleChoiceRef = ref(null)
const fillBlankRef = ref(null)
const subjectiveRef = ref(null)
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
  editor && editor.destroy()
  editor = null
  if(subjectType.value === '单选') {
    if(singleChoiceRef.value.editorList && singleChoiceRef.value.editorList.length > 0) {
      singleChoiceRef.value.editorList.forEach((element) => {
        element.destroy()
      });
      singleChoiceRef.value.elementList.value = []
      singleChoiceRef.value.optionList.value = []
    }
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
// eslint-disable-next-line no-unused-vars
const replaceFill = (html) => { 
  const temp = html.replace(/\[填空[1-9]+\]/g, '<input class="fillContent" style="margin: 10px;"/>')
  document.getElementById('edit').innerHTML = temp
}

// 创建题目完成
const handleOk = () => {
  // editContent = editor.txt.getJSON()
  // const html = editor.txt.html()
  // if (subjectType.value === '填空') {
  //   replaceFill(html)
  // } else {
  //   document.getElementById('edit').innerHTML = html
  // }
  switch(subjectType.value) {
    case '填空': console.log('填空')
    console.log(fillBlankRef.value)
    break
    case '单选': console.log('单选')
    // console.log(singleChoiceRef.value.elementList, singleChoiceRef.value.editorList)
    if(singleChoiceRef.value.editorList && singleChoiceRef.value.editorList.length > 0) {
      singleChoiceRef.value.editorList.forEach((element,index) => {
        console.log(index, element.txt.text())
      });
    }
    break
    case '多选': console.log('多选')
    console.log(multipleChoiceRef.value)
    break
    case '主观': console.log('主观')
    console.log(subjectiveRef.value)
    break
    default: console.log('其他的')
  }
  visible.value = false
  cancelModal()

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
  createEditor,
  singleChoiceRef,
  multipleChoiceRef,
  subjectiveRef,
  fillBlankRef,
  score
}