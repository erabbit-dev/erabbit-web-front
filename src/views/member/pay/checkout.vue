<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem >填写订单</XtxBreadItem>
      </XtxBread>
      <div class="wrapper" v-if="order">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <!-- 收货地址组件 -->
          <CheckoutAddress @change="changeAddress" :list="order.userAddresses" />
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.goods" :key="item.skuId">
                <td>
                  <RouterLink :to="`/product/${item.id}`" class="info">
                    <img :src="item.picture" alt="">
                    <div class="right">
                      <p>{{item.name}}</p>
                      <p>{{item.attrsText}}</p>
                    </div>
                  </RouterLink>
                </td>
                <td>&yen;{{item.price}}</td>
                <td>{{item.count}}</td>
                <td>&yen;{{item.totalPrice}}</td>
                <td>&yen;{{item.totalPayPrice}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
         <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color:#999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl><dt>商品件数：</dt><dd>{{order.summary.goodsCount}}件</dd></dl>
            <dl><dt>商品总价：</dt><dd>¥{{order.summary.totalPrice}}</dd></dl>
            <dl><dt>运<i></i>费：</dt><dd>¥{{order.summary.postFee}}</dd></dl>
            <dl><dt>应付总额：</dt><dd class="price">¥{{order.summary.totalPayPrice}}</dd></dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <XtxButton @click="submitOrderFn" type="primary">提交订单</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckoutAddress from './components/checkout-address'
import { createOrder, submitOrder, repurchaseOrder } from '@/api/order'
import { reactive, ref } from 'vue'
import Message from '@/components/library/Message'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'XtxPayCheckoutPage',
  components: { CheckoutAddress },
  setup () {
    // 结算功能-生成订单-订单信息
    const order = ref(null)
    const route = useRoute()
    const store = useStore()
    if (route.query.orderId) {
      // 按照订单中商品结算
      repurchaseOrder(route.query.orderId).then(data => {
        order.value = data.result
        reqParams.goods = data.result.goods.map(({ skuId, count }) => ({ skuId, count }))
      })
    } else {
      // 按照购物车商品结算
      createOrder().then(data => {
        order.value = data.result
        reqParams.goods = data.result.goods.map(({ skuId, count }) => ({ skuId, count }))
      })
    }

    // 接收收货地址ID
    const changeAddress = (id) => {
      reqParams.addressId = id
    }

    // 结算功能-提交订单-提交信息
    const reqParams = reactive({
      deliveryTimeType: 1,
      payType: 1,
      payChannel: 1,
      buyerMessage: '',
      // 商品信息，获取订单信息后设置
      goods: [],
      // 收货地址，切换收货地址或者组件默认的时候设置
      addressId: null
    })

    // 提交订单
    const router = useRouter()
    const submitOrderFn = () => {
      // 检查收货地址是否选好
      if (!reqParams.addressId) {
        return Message({ text: '亲，请选择收货地址' })
      }
      submitOrder(reqParams).then(data => {
        // 清理本地购物车
        store.dispatch('cart/findCart')
        // 提交订单成功
        Message({ type: 'success', text: '提交订单成功' })
        // 跳转支付页面
        router.push(`/member/pay?orderId=${data.result.id}`)
      })
    }

    return { order, changeAddress, reqParams, submitOrderFn }
  }
}
</script>
<style scoped lang="less">
.xtx-pay-checkout-page {
  .wrapper {
    background: #fff;
    padding: 0 20px;
    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }
    .box-body {
      padding: 20px 0;
    }
  }
}
.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  .info {
    display: flex;
    text-align: left;
    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }
    .right {
      line-height: 24px;
      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }
  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }
    td,th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;
      &:first-child {
        border-left: 1px solid #f5f5f5;
      }
      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
  &.active,&:hover {
    border-color: @xtxColor;
  }
}
.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;
    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }
    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;
      &.price {
        font-size: 20px;
        color: @priceColor;
      }
    }
  }
}
.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
