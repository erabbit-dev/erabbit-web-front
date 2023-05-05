<template>
  <div class="member-order-detail" v-if="order">
    <!-- 头部 -->
    <DetailAction :order="order" />
    <!-- 进度 -->
    <DetailStep :order="order" />
    <!-- 物流 -->
    <Suspense>
      <template #default>
        <DetailLogistics v-if="[3,4,5].includes(order.orderState)" :order="order" />
      </template>
      <template #fallback>
        <div class="loading">loading...</div>
      </template>
    </Suspense>
    <!-- 信息 -->
    <DetailInfo :order="order" />
  </div>
</template>
<script>
import { ref } from 'vue'
import DetailAction from './components/detail-action'
import DetailStep from './components/detail-step'
import DetailLogistics from './components/detail-logistics'
import DetailInfo from './components/detail-info'
import { findOrderDetail } from '@/api/order'
import { useRoute } from 'vue-router'
export default {
  name: 'MemberDetail',
  components: {
    DetailAction,
    DetailStep,
    DetailLogistics,
    DetailInfo
  },
  setup () {
    const route = useRoute()
    const order = ref(null)
    findOrderDetail(route.params.id).then(data => {
      order.value = data.result
    })
    return { order }
  }
}
</script>
<style scoped lang="less">
.member-order-detail {
  background: #fff;
  height: 100%;
}
.loading {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: #f5f5f5;
  margin: 30px 50px 0;
}
</style>
