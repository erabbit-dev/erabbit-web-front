import Mock from 'mockjs'
export default {
  relevant: config => {
    const images = [
      'https://yanxuan-item.nosdn.127.net/65be335760e2375432b4410adbd32b2f.png?type=webp&imageView&quality=95&thumbnail=210x210',
      'https://yanxuan-item.nosdn.127.net/34aa50a8aabd592681733f615fc862c4.png?type=webp&imageView&quality=95&thumbnail=210x210',
      'https://yanxuan-item.nosdn.127.net/ad15ea988d0591e5d0a9e47c938a69d9.jpg?type=webp&quality=95&thumbnail=245x245&imageView',
      'https://yanxuan-item.nosdn.127.net/7f84dd79d8d8620fe1ed38a709fabef3.jpg?type=webp&quality=95&thumbnail=245x245&imageView'
    ]
    const goods = []
    for (let k = 0; k < 16; k++) {
      goods.push(Mock.mock({
        id: '@id',
        name: '@ctitle(6,8)',
        price: '@float(100,1000,2,2)',
        picture: images[Mock.mock('@integer(0,3)')],
        desc: '@ctitle(4,6)'
      }))
    }
    return {
      msg: '获取推荐商品成功',
      result: goods
    }
  },
  hot: config => {
    const images = [
      'https://yanxuan-item.nosdn.127.net/65be335760e2375432b4410adbd32b2f.png?type=webp&imageView&quality=95&thumbnail=210x210',
      'https://yanxuan-item.nosdn.127.net/34aa50a8aabd592681733f615fc862c4.png?type=webp&imageView&quality=95&thumbnail=210x210',
      'https://yanxuan-item.nosdn.127.net/ad15ea988d0591e5d0a9e47c938a69d9.jpg?type=webp&quality=95&thumbnail=245x245&imageView',
      'https://yanxuan-item.nosdn.127.net/7f84dd79d8d8620fe1ed38a709fabef3.jpg?type=webp&quality=95&thumbnail=245x245&imageView'
    ]
    const goods = []
    for (let k = 0; k < 3; k++) {
      goods.push(Mock.mock({
        id: '@id',
        name: '@ctitle(6,8)',
        price: '@float(100,1000,2,2)',
        picture: images[Mock.mock('@integer(0,3)')],
        desc: '@ctitle(4,6)'
      }))
    }
    return {
      msg: '获取热销商品成功',
      result: goods
    }
  }
}
