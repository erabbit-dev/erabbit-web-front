<template>
  <XtxDialog :title="`${formData.id?'修改':'添加'}收货地址`" v-model:visible="visibleDialog">
    <!-- 表单 -->
    <div class="address-edit">
      <div class="xtx-form">
        <div class="xtx-form-item">
          <div class="label">收货人：</div>
          <div class="field">
            <input v-model="formData.receiver" class="input" placeholder="请输入收货人" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">手机号：</div>
          <div class="field">
            <input v-model="formData.contact" class="input" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地区：</div>
          <div class="field">
            <XtxCity :fullLocation="formData.fullLocation" @change="changeCity" placeholder="请选择所在地区"/>
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">详细地址：</div>
          <div class="field">
            <input v-model="formData.address" class="input" placeholder="请输入详细地址" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">邮政编码：</div>
          <div class="field">
            <input v-model="formData.postalCode" class="input" placeholder="请输入邮政编码" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地址标签：</div>
          <div class="field">
            <input v-model="formData.addressTags" class="input" placeholder="请输入地址标签，逗号分隔" />
          </div>
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <template #footer>
      <XtxButton @click="visibleDialog=false" type="gray" style="margin-right:20px">取消</XtxButton>
      <XtxButton @click="submit()" type="primary">确认</XtxButton>
    </template>
  </XtxDialog>
</template>
<script>
import { reactive, ref } from 'vue'
import { addAddress, editAddress } from '@/api/order'
import Message from '@/components/library/Message'
export default {
  name: 'AddressEdit',
  setup (props, { emit }) {
    const visibleDialog = ref(false)

    // 定义一个open函数，做为打开对话框函数(组件实例拥有open函数)
    const open = (address) => {
      visibleDialog.value = true
      if (address.id) {
        // 如果修改 填充表单
        for (const key in address) {
          formData[key] = address[key]
        }
      } else {
        // 如果添加 清空表单
        for (const key in formData) {
          if (key === 'isDefault') {
            formData[key] = 1
          } else {
            formData[key] = null
          }
        }
      }
    }

    // 定义表单数据对象
    const formData = reactive({
      receiver: null,
      contact: null,
      provinceCode: null,
      cityCode: null,
      countyCode: null,
      address: null,
      postalCode: null,
      addressTags: null,
      isDefault: 1,
      // 城市组件显示文字（完整行政区地址）
      fullLocation: null
    })

    // 城市选中
    const changeCity = (result) => {
      formData.provinceCode = result.provinceCode
      formData.cityCode = result.cityCode
      formData.countyCode = result.countyCode
      formData.fullLocation = result.fullLocation
    }

    // 添加时候的提交操作（修改）
    const submit = () => {
      // 1. 省略了校验
      if (!formData.receiver) {
        return Message({ text: '请输入收货人' })
      }
      if (formData.receiver.length > 20) {
        return Message({ text: '收货人20个字符内' })
      }
      if (!formData.contact) {
        return Message({ text: '请输入手机号' })
      }
      if (!/^1[3-9]\d{9}$/.test(formData.contact)) {
        return Message({ text: '手机号格式不对' })
      }
      if (!formData.fullLocation) {
        return Message({ text: '请选择收货地区' })
      }
      if (!formData.address) {
        return Message({ text: '请输入详细地址' })
      }
      if (formData.address.length > 50) {
        return Message({ text: '详细地址50个字符内' })
      }
      if (formData.postalCode && !/^\d{6}$/.test(formData.postalCode)) {
        return Message({ text: '邮政编码格式不对' })
      }
      if (formData.addressTags && formData.addressTags.length > 20) {
        return Message({ text: '地址标签20个字符内' })
      }

      // 2. 发送请求了
      if (formData.id) {
        // 修改请求
        editAddress(formData).then(data => {
          // 提示
          Message({ type: 'success', text: '修改收货地址成功' })
          // 关闭
          visibleDialog.value = false
          // 触发自定义事件
          emit('on-success', formData)
        })
      } else {
        // 添加请求
        addAddress(formData).then(data => {
          // 需要设置ID
          formData.id = data.result.id
          // 提示
          Message({ type: 'success', text: '添加收货地址成功' })
          // 关闭
          visibleDialog.value = false
          // 触发自定义事件
          emit('on-success', formData)
        })
      }
    }

    return { visibleDialog, open, formData, changeCity, submit }
  }
}
</script>
<style scoped lang="less">
.xtx-dialog {
  :deep(.wrapper){
    width: 780px;
    .body {
      font-size: 14px;
    }
  }
}
.xtx-form {
  padding: 0;
  input {
    outline: none;
    &::placeholder {
      color: #ccc;
    }
  }
}
.xtx-city {
  width: 320px;
  :deep(.select) {
    height: 50px;
    line-height: 48px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    .placeholder {
      color: #ccc;
    }
    i {
      color: #ccc;
      font-size: 18px;
    }
    .value {
      font-size: 14px;
    }
  }
  :deep(.option) {
    top: 49px;
  }
}
</style>
