import { userAccountCheck } from '@/api/user'

// 给vee-validate提供校验规则函数
export default {
  // 用户名校验
  account (value) {
    if (!value) return '请输入用户名'
    // 规则：字母开头6-20字符之间
    if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
    return true
  },
  // 用户校验且校验唯一性
  async accountApi (value) {
    if (!value) return '请输入用户名'
    if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
    // 服务器端校验
    const data = await userAccountCheck(value)
    if (data.result.valid) return '用户名已存在'
    return true
  },
  // 密码校验
  password (value) {
    if (!value) return '请输入密码'
    // 规则：密码格式6-24个字符
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    return true
  },
  // 密码校验
  rePassword (value, { form }) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    // form表单数据对象
    if (value !== form.password) return '需要和密码保持一致'
    return true
  },
  mobile (value) {
    if (!value) return '请输入手机号'
    // 规则：1开头 3-9 之间  9个数字
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式不对'
    return true
  },
  code (value) {
    if (!value) return '请输入短信验证码'
    // 规则： 6个数字
    if (!/^\d{6}$/.test(value)) return '短信验证码6个数字'
    return true
  },
  isAgree (value) {
    if (!value) return '请勾选登录协议'
    return true
  }
}
