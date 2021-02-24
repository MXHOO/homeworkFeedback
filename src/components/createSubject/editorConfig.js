import hljs from 'highlight.js'
const editorConfig = (obj) => {
   const temp = {
    highlight: hljs,
  }
  const config = {
    showFullScreen: false,
    menus: ['bold',
      'head',
      'link',
      'italic',
      'underline',
      'code'
    ]
  }
  Object.assign(obj, temp)
  Object.assign(obj.config, config)
}
export default editorConfig