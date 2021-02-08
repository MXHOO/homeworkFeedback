<template>
  <div>
    <p>{{counter}}</p>
    <p>{{twiceTheCounter}}</p>
    <p>{{injectTest}}</p>
    <p>{{geoTest.longitude}} : {{geoTest.latitude}}</p>
    <div ref="root">root element</div>
    <EditorQuill ref="test"></EditorQuill>
    <!-- <quill-editor :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)"></quill-editor> -->
  </div>
</template>
<script>
// import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { computed, inject, onMounted, ref } from 'vue'
export default {
  components: {
    // quillEditor
  },
  data() {
    return {
      content: '',
      editorOption: {

      }
    }
  },
  props: {
    user: {
      type: String,
      default: '111'
    }
  },
  setup (props, context) {
    const root =  ref(null)
    const injectTest = inject('location')
    const geoTest = inject('geolocation')
    const counter = ref(666)
    console.log('attrs', context.attrs)
    console.log('slots', context.slots)
    console.log('emit', context.emit)
    const twiceTheCounter = computed(() => counter.value * 2)
    onMounted(() => {
      console.log(root.value)
      console.log('props', props, context)
    })
    return {
      injectTest,
      counter,
      twiceTheCounter,
      geoTest,
      root
    }
  },
  methods: {
    onEditorBlur(e) {
      console.log(e)
    },
    onEditorFocus(e) {
      console.log(e)
    },
    onEditorChange(e) {
      console.log(e)
    }
  }
}
</script>