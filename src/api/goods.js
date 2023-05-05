import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id - 商品ID
 */
export const findGoods = (id) => {
  return request('/goods', 'get', { id })
}

/**
 * 获取商品同类推荐-未传入ID为猜喜欢
 * @param {String} id - 商品ID
 * @param {Number} limit - 获取条数
 */
export const findRelGoods = (id, limit = 16) => {
  return request('/goods/relevant', 'get', { id, limit })
}

/**
 * 获取热榜商品
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜 3代表总热销榜
 * @param {Number} limit - 获取个数
 */
export const findHotGoods = (type, limit = 3) => {
  return request('/goods/hot', 'get', { type, limit })
}

/**
 * 获取商品的评价统计信息
 * @param {String} id - 商品ID
 */
export const findCommentInfoByGoods = (id) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}

/**
 * 获取商品的评价列表信息
 * @param {String} id - 商品ID
 * @param {Object} reqParams - 筛选条件
 */
export const findCommentListByGoods = (id, reqParams) => {
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`, 'get', reqParams)
}

/**
 * 获取商品的最新价格和库存和是否有效
 * @param {String} skuId - 商品SKUID
 */
export const findGoodsNewInfo = (skuId) => {
  return request(`/goods/stock/${skuId}`, 'get')
}

/**
 * 根据商品SKUID获取  属性和sku信息
 * @param {String} skuId - 商品SKUID
 */
export const findGoodsSkus = (skuId) => {
  return request(`/goods/sku/${skuId}`, 'get')
}
