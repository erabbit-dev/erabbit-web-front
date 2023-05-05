<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <div ref="target" style="position: relative;height: 426px;">
        <!-- 面板内容 -->
        <Transition name="fade">
          <ul v-if="list.length" class="goods-list">
            <li v-for="item in list" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" alt="">
                <p class="name">{{item.title}}</p>
                <p class="desc">{{item.alt}}</p>
              </RouterLink>
            </li>
          </ul>
          <HomeSkeleton v-else />
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>
<script>
import { findHot } from '@/api/home'
import HomePanel from './home-panel'
import HomeSkeleton from './home-skeleton'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeHot',
  components: { HomePanel, HomeSkeleton },
  setup () {
    // const list = ref([])
    // findHot().then(data => {
    //   list.value = data.result
    // })
    const { target, result } = useLazyData(findHot)
    return { list: result, target }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
