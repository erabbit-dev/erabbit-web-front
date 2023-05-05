// 提供一个能够显示xtx-message组件的函数
// 这个函数将来：导入直接使用，也可以挂载在vue实例原型上
// import Message from 'Message.js' 使用 Message({type:'error',text:'提示文字'})
// this.$message({type:'error',text:'提示文字'})

import { createVNode, render } from 'vue'
import XtxMessage from './xtx-message.vue'

// DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-msssage-container')
document.body.appendChild(div)

// 定时器标识
let timer = null

export default ({ type, text }) => {
  // 渲染组件
  // 1. 导入消息提示组件
  // 2. 将消息提示组件编译为虚拟节点(dom节点)
  // createVNode(组件,属性对象（props）)
  const vnode = createVNode(XtxMessage, { type, text })
  // 3. 准备一个装载消息提示组件的DOM容器
  // 4. 将虚拟节点渲染再容器中
  // render(虚拟节点,DOM容器)
  render(vnode, div)
  // 5. 3s后销毁组件
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 3000)
}
