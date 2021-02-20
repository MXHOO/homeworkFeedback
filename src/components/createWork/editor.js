// 添加填空选项
import CustomizeEditor from 'wangeditor'
const {
  BtnMenu
} = CustomizeEditor
class fillMenu extends BtnMenu {
  constructor(editor) {
    editor.count = 0
    const $elem = CustomizeEditor.$(
      `<div class="w-e-menu" data-title="填空">
            <p>[填空]</p>
        </div>`
    )
    super($elem, editor)
  }
  clickHandler() {
    this.editor.count++;
    this.editor.cmd.do('insertHTML', `<p>[填空${this.editor.count}]</p>`)
  }
}
CustomizeEditor.registerMenu('fillMenu', fillMenu)

export default CustomizeEditor