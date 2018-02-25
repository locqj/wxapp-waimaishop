// page/component/details/details.js
Page({
  data:{
    
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  onLoad(option) {
    let detail = JSON.parse(option.d)
    console.log(detail)
    this.setData({
      goods: {
        id: 1,
        image: detail.thumb,
        title: detail.name,
        price: detail.price,
        stock: detail.stock,
        detail: detail.detail,
        parameter: detail.parameter,
        service: detail.service
      }
    })
  },
  // 增加数目
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },
  // 添加到购物车
  addToCart() {
    let _this = this
    console.log(this.data.goods)
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    // { id: 1, title:'新鲜芹菜 半斤', image:'/image/s5.png', num:4, price:0.01, selected:true },
    wx.getStorage({
      key: 'card',
      success: function (res) {
        // 购物车有数据，重新封装数据
        let data = res.data
        data.push({
          id: _this.data.goods.id,
          title: _this.data.goods.title,
          image: _this.data.goods.image,
          num: num,
          price: _this.data.goods.price,
          selected: true
        })
        wx.setStorage({
          key: 'card',
          data: data,
        })
        // console.log(data)
      },
      fail: function() {
        // 购物车无数据
        wx.setStorage({
          key: "card",
          data: [{
            id: _this.data.goods.id,
            title: _this.data.goods.title,
            image: _this.data.goods.image,
            num: num,
            price: _this.data.goods.price,
            selected:true
          }]
        })
      }
    })
    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})