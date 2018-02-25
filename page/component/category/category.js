Page({
    data: {
        
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onLoad: function (options) {
      // 判断进入路由参数，进行相应路由渲染
      if (options.d === 'bk') {
        console.log('汉堡王')
        this.setData({
          category: [
            { name: '汉堡', id: 'hanbao' },
            { name: '套餐', id: 'taocan' },
            { name: '早餐', id: 'zaocan' },
            { name: '小食', id: 'xiaoshi' },
            { name: '甜点', id: 'tiandian' },
            { name: '饮料', id: 'yinliao' }
          ],
          detail: [
            {
              id: "hanbao",
              banner: '../../../image/bk/banner.png',
              cate: '汉堡',
              detail: [
                {
                  id: 'bk1',
                  thumb: "../../../image/bk/c1.png",
                  name: "安格斯厚牛堡",
                  price: 20,
                  stock: '有货',
                  detail: '这里是安格斯厚牛堡详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bk2',
                  thumb: "../../../image/bk/c2.png",
                  name: "德州熏厚牛堡",
                  price: 25,
                  stock: '有货',
                  detail: '这里是德州熏厚牛堡详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bk3',
                  thumb: "../../../image/bk/c3.png",
                  name: "王堡",
                  price: 25,
                  stock: '有货',
                  detail: '这里是王堡详情。',
                  parameter: 'test',
                  service: '不支持退货'
                  
                }
              ]
            },
            {
              id: "taocan",
              banner: '../../../image/bk/banner.png',
              cate: '套餐',
              detail: [
                {
                  id: 'bk4',
                  thumb: "../../../image/bk/c4.png",
                  name: "小霸王套餐",
                  price: 45,
                  stock: '有货',
                  detail: '这里是王堡详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bk5',
                  thumb: "../../../image/bk/c5.png",
                  name: "美式鸡排套餐",
                  price: 55,
                  stock: '有货',
                  detail: '这里是美式鸡排套餐详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bk6',
                  thumb: "../../../image/bk/c6.png",
                  name: "鸡腿堡套餐",
                  price: 35,
                  stock: '有货',
                  detail: '这里是王堡详情。',
                  parameter: 'test',
                  service: '不支持退货'
                }
              ]
            },
            {
              id: "zaocan",
              banner: '../../../image/bk/banner.png',
              cate: '早餐',
              detail: [
                {
                  id: 'bk7',
                  thumb: "../../../image/bk/c7.png",
                  name: "猪肉可颂",
                  price: 8,
                  stock: '有货',
                  detail: '这里是猪肉可颂详情。',
                  parameter: 'test',
                  service: '不支持退货'
                  
                },
                {
                  id: 'bk8',
                  thumb: "../../../image/bk/c8.png",
                  name: "蛋包芝士可颂",
                  price: 10,
                  stock: '有货',
                  detail: '这里是蛋包芝士可颂详情。',
                  parameter: 'test',
                  service: '不支持退货'
                  
                },
                {
                  id: 'bk9',
                  thumb: "../../../image/bk/c9.png",
                  name: "培根蛋包卷",
                  price: 7,
                  stock: '有货',
                  detail: '这里是培根蛋包卷详情。',
                  parameter: 'test',
                  service: '不支持退货'
                  
                },
                {
                  id: 'bk10',
                  thumb: "../../../image/bk/c10.png",
                  name: "猪肉蛋包卷",
                  price: 6,
                  stock: '有货',
                  detail: '这里是猪肉蛋包卷详情。',
                  parameter: 'test',
                  service: '不支持退货'
                  
                }
              ]
            },
            {
              id: "xiaoshi",
              banner: '../../../image/bk/banner.png',
              cate: '小食',
              detail: [
                {
                  id: 'bk11',
                  thumb: "../../../image/bk/c11.png",
                  name: "霸王鸡条",
                  price: 15,
                  stock: '有货',
                  detail: '这里是霸王鸡条详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                
              ]
            },
            {
              id: "tiandian",
              banner: '../../../image/bk/banner.png',
              cate: '甜点',
              detail: [
                {
                  id: 'bk12',
                  thumb: "../../../image/bk/c12.png",
                  name: "火炬冰淇淋",
                  price: 5,
                  stock: '有货',
                  detail: '这里是火炬冰淇淋详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },

              ]
            },
            {
              id: "yinliao",
              banner: '../../../image/bk/banner.png',
              cate: '饮料',
              detail: [
                {
                  id: 'bk13',
                  thumb: "../../../image/bk/c13.png",
                  name: "纯果乐果汁",
                  price: 15,
                  stock: '有货',
                  detail: '这里是纯果乐果汁详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },

              ]
            },
          ]
        })
      } else if (options.d === 'ycyk') {
        console.log('优城悦客')
        this.setData({
          category: [
            { name: '经典扒餐', id: 'guowei' },
            { name: '布丁松饼', id: 'shucai' },
            { name: '意式咖啡', id: 'chaohuo' },
            { name: '私房小菜', id: 'danfan' }
          ]
        })
      } else if (options.d === 'dj') {
        this.setData({
          category: [
            { name: '点心', id: 'dianxin' },
            { name: '粥类', id: 'zoulei' },
            { name: '炖汤', id: 'duntang' },
            { name: '炒点', id: 'chaodian' },
          ]
        })
        console.log('笃记')
      } else if (options.d === 'xyx') {
        console.log('鲜芋仙')
        this.setData({
          category: [
            { name: '鲜芋仙', id: 'xianyuxian' },
            { name: '冰类', id: 'binglei' },
            { name: '饮品', id: 'yingpin' },
          ]
        })
      } else if (options.d === 'hdl') {
        console.log('海底捞')
        this.setData({
          category: [
            { name: '汤底', id: 'guodi' },
            { name: '特色菜品', id: 'teshecaipin' },
            { name: '海鲜', id: 'haixian' },
            { name: '豆面制品', id: 'doumianzhipin' },
            { name: '叶菜类', id: 'yecailei' },
          ]
        })
      } else {
        this.setData({
          category: [
            { name: '汤底', id: 'guodi' },
            { name: '特色菜品', id: 'teshecaipin' },
            { name: '海鲜', id: 'haixian' },
            { name: '豆面制品', id: 'doumianzhipin' },
            { name: '叶菜类', id: 'yecailei' },
          ]
        })
      }
      // 页面初始化 options为页面跳转所带来的参数
    },
    onReady(){
        // var self = this;
        // wx.request({
        //     url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
        //     success(res){
        //         self.setData({
        //             detail : res.data
        //         })
        //     }
        // });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    },
    redTo: function(e) {
      // 获取物品详细信息
      let shopdetail = e.currentTarget.dataset.value 
      // 将json对象转化为string 以url get的方式传送数据
      shopdetail = JSON.stringify(shopdetail)
      // 页面跳转
      wx.navigateTo({
        url: '../details/details?d=' + shopdetail
      })
    }
    
})