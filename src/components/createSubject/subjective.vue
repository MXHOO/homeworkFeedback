<template>
  <div>主观题</div>
  <div id="subjectContent">
    单选题
  </div>
  <p>选项</p>
  <div id="optionContent">
  </div>
   <div ref='editor'></div>
    <button @click='syncHTML'>同步内容</button>
    <div :innerHTML='content.html'></div>
</template>
<script>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import WangEditor from 'wangeditor';
export default {
  setup () {
    const editor = ref();
    const content = reactive({
      html: '',
      text: ''
    })
    let instance
    onMounted(() => {
      instance = new WangEditor(editor.value)
      Object.assign(instance.config, {
        onchange () {
          console.log('change')
        },
      })
      console.log('instance.config', instance.config)
      instance.create()
    })
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })
    const syncHTML = () => {
      content.html = instance.txt.html()
    }
    return {
      syncHTML,
      editor,
      content
    }
  }
}
</script>