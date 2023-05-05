<template>
  <div class='goods-sort'>
    <div class="sort">
      <a :class="{active:myFilters.sortField===null}" href="javascript:;"  @click="changeSort(null)">默认排序</a>
      <a :class="{active:myFilters.sortField==='publishTime'}" href="javascript:;" @click="changeSort('publishTime')">最新商品</a>
      <a :class="{active:myFilters.sortField==='orderNum'}" href="javascript:;" @click="changeSort('orderNum')">最高人气</a>
      <a :class="{active:myFilters.sortField==='evaluateNum'}" href="javascript:;" @click="changeSort('evaluateNum')">评论最多</a>
      <a href="javascript:;" @click="changeSort('price')">
        价格排序
        <i class="arrow up" :class="{active:myFilters.sortMethod==='asc'}" />
        <i class="arrow down"  :class="{active:myFilters.sortMethod==='desc'}" />
      </a>
    </div>
    <div class="check">
      <XtxCheckbox v-model="myFilters.inventory">仅显示有货商品</XtxCheckbox>
      <XtxCheckbox v-model="myFilters.onlyDiscount">仅显示特惠商品</XtxCheckbox>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
const useSortData = () => {
  const myFilters = reactive({
    sortField: null,
    sortMethod: null,
    inventory: false,
    onlyDiscount: false
  })
  const changeSort = (field) => {
    myFilters.sortField = field
    if (field === 'price') {
      if (myFilters.sortMethod === null) {
        myFilters.sortMethod = 'desc'
      } else {
        myFilters.sortMethod = myFilters.sortMethod === 'desc' ? 'asc' : 'desc'
      }
    } else {
      myFilters.sortMethod = null
    }
  }
  return { myFilters, changeSort }
}
export default {
  name: 'GoodsSort',
  setup (props, { emit }) {
    const { myFilters, changeSort } = useSortData()
    watch(myFilters, () => {
      emit('change', myFilters)
    })
    return { myFilters, changeSort }
  }
}
</script>

<style scoped lang='less'>
.goods-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all .3s;
      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
            &.active {
            border-bottom-color: @xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }
  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
