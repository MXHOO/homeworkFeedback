import 'highlight.js/styles/github.css'
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
const stemRef = ref(null)
const singleChoiceRef = ref(null)
const multipleChoiceRef = ref(null)
const fillBlankRef = ref(null)
const subjectiveRef = ref(null)
let editor = null


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
      singleChoiceRef.value.elementList = []
      singleChoiceRef.value.optionList = []
    }
    subjectType.value = '填空'
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
  const temp = html.replace(/【填空】/g, '<input class="fillContent" style="margin: 10px;"/>')
  document.getElementById('edit').innerHTML = temp
}

function processParam(){
  console.log('题干部分', stemRef.value)
  const param = {
    content: {
      score: score.value,
      body: stemRef.value
    },
  }
  switch(subjectType.value) {
    case '填空': console.log('填空')
    param.problem_type = 3
    console.log(fillBlankRef.value)
    break

    case '单选':
    if(singleChoiceRef.value.editorList && singleChoiceRef.value.editorList.length > 0) {
      const options = []
      const result = singleChoiceRef.value.editorList.map((element,index) => {
        options.push({ key: String.fromCharCode(65 + parseInt(index)), value: element.txt.text() })
        return options
      })
      param.content.options = result
    }
    param.problem_type = 1
    break

    case '多选': console.log('多选')
    param.problem_type = 2
    console.log(multipleChoiceRef.value)
    break

    case '主观': console.log('主观')
    param.problem_type = 4
    console.log(subjectiveRef.value)
    break

    default: console.log('其他的')
  }

  console.log(param)

}
// 创建题目完成
const handleOk = () => {
  processParam()
  // editContent = editor.txt.getJSON()
  // const html = editor.txt.html()
  // if (subjectType.value === '填空') {
  //   replaceFill(html)
  // } else {
  //   document.getElementById('edit').innerHTML = html
  // }
  cancelModal()
  visible.value = false
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
  singleChoiceRef,
  multipleChoiceRef,
  subjectiveRef,
  fillBlankRef,
  stemRef,
  score
}