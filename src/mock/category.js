import Mock from 'mockjs'
import { defaultCategory } from '@/api/constants'

export default {
  headCategory: config => {
    const list = defaultCategory.map(item => {
      const children = []
      for (let index = 0; index < 10; index++) {
        children.push(Mock.mock({
          id: '@id',
          name: '@ctitle(2,3)',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(${Mock.mock('@integer(1,10)')}).png`
        }))
      }
      const goods = []
      for (let index = 0; index < 9; index++) {
        goods.push(Mock.mock({
          id: '@id',
          name: '@ctitle(15,20)',
          desc: '@ctitle(6,12)',
          price: '@float(10,200,2,2)',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(${Mock.mock('@integer(1,10)')}).png`
        }))
      }
      return Mock.mock({
        id: '@id',
        name: item,
        children,
        goods
      })
    })
    return {
      msg: '获取头部分类成功',
      result: list
    }
  },
  category: config => {
    const children = []
    for (let i = 0; i < 10; i++) {
      const goods = []
      for (let j = 0; j < 5; j++) {
        goods.push(Mock.mock({
          id: '@id',
          name: '@ctitle(15,20)',
          desc: '@ctitle(6,8)',
          price: '@float(10,200,2,2)',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/kitchen_goods_${Mock.mock('@integer(1,8)')}.jpg`
        }))
      }
      children.push(Mock.mock({
        id: '@id',
        name: '@ctitle(2,3)',
        picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(${Mock.mock('@integer(1,10)')}).png`,
        goods
      }))
    }
    const result = Mock.mock({
      id: '@id',
      name: '@ctitle(2,3)',
      children
    })
    return {
      msg: '查询广告区域成功',
      result
    }
  },
  filter: config => {
    const brands = []
    for (let i = 0; i < 8; i++) {
      brands.push(Mock.mock({
        id: '@id',
        name: '@ctitle(2,3)'
      }))
    }
    const saleProperties = []
    for (let i = 0; i < 4; i++) {
      const properties = []
      for (let j = 0; j < 8; j++) {
        properties.push(Mock.mock({
          id: '@id',
          name: '@ctitle(2,3)'
        }))
      }
      saleProperties.push(Mock.mock({
        id: '@id',
        name: '@ctitle(2,3)',
        properties
      }))
    }
    return {
      msg: '查询二级分类筛选条件成功',
      result: {
        brands,
        saleProperties
      }
    }
  },
  goods: config => {
    const body = JSON.parse(config.body)
    console.log(body)
    const pageSize = body.pageSize || 20
    const page = body.page || 1
    const list = []
    if (page < 6) {
      for (let i = 0; i < pageSize; i++) {
        const num = Mock.mock('@integer(1,8)')
        list.push(Mock.mock({
          id: '@id',
          price: '@float(100,300,2,2)',
          name: '@ctitle(10,20)',
          desc: '@ctitle(6,8)',
          picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_${num}.jpg`
        }))
      }
    }
    return {
      msg: '查询二级分类商品列表成功',
      result: {
        page,
        pageSize,
        items: list
      }
    }
  }
}
