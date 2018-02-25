//获取应用实例
import {
  getSellers
} from '../utils/apis'

Page({
  data: {
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    // 分类数据
    category: [
      {
        "category_id": "1",
        "title": "本地特产",
        "icon": "/image/category/1.png"
      },
      {
        "category_id": "2",
        "title": "美食外卖",
        "icon": "/image/category/2.png"
      },
      {
        "category_id": "3",
        "title": "甜品蛋糕",
        "icon": "/image/category/3.png"
      },
      {
        "category_id": "4",
        "title": "果蔬生鲜",
        "icon": "/image/category/4.png"
      },
      {
        "category_id": "5",
        "title": "超市便利",
        "icon": "/image/category/5.png"
      },
      {
        "category_id": "6",
        "title": "进口产品",
        "icon": "/image/category/6.png"
      },
      {
        "category_id": "7",
        "title": "优惠活动",
        "icon": "/image/category/7.png"
      },
      {
        "category_id": "8",
        "title": "全部分类",
        "icon": "/image/category/8.png"
      }
    ],
    // 商店数据
    business: [
      { 
        "id":'bk',
        "title": "汉堡王",
        "sellcount": 3600,
        "startsell": 30,
        "packagesell": 5,
        "shopimg": "../../image/bk.png",
        "pmin": 30,
        "dist": 450,
        "shopicon": [
          "../../image/icon/准.png",
          "../../image/icon/减.png",
          "../../image/icon/折.png",
          "../../image/icon/特.png",
        ]
      },
      {
        "id": 'ycyk',
        "title": "优城悦客",
        "sellcount": 3720,
        "startsell": 25,
        "packagesell": 0,
        "shopimg": "../../image/ye.png",
        "pmin": 23,
        "dist": 550,
        "shopicon": [
          "../../image/icon/折.png",
          "../../image/icon/特.png",
        ]
      },
      {
        "id":'hdl',
        "title": "海底捞",
        "sellcount": 12360,
        "startsell": 120,
        "packagesell": 10,
        "shopimg": "../../image/hdl.png",
        "pmin": 36,
        "dist": 480,
        "shopicon": [
          "../../image/icon/减.png",
          "../../image/icon/折.png",
        ]
      },
      {
        "id": 'dj',
        "title": "笃记",
        "sellcount": 13720,
        "startsell": 120,
        "packagesell": 0,
        "shopimg": "../../image/dj.jpg",
        "pmin": 23,
        "dist": 20,
        "shopicon": [
          "../../image/icon/折.png",
          "../../image/icon/特.png",
          "../../image/icon/减.png",
          
        ]
      },
      {
        "id": 'xyx',
        "title": "鲜芋仙",
        "sellcount": 1720,
        "startsell": 20,
        "packagesell": 0,
        "shopimg": "../../image/xyx.jpg",
        "pmin": 20,
        "dist": 220,
        "shopicon": [
          "../../image/icon/折.png",
          "../../image/icon/减.png",

        ]
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  redTo: function(e) {
    let shopid = e.currentTarget.dataset.shop
    console.log(shopid)
    wx.navigateTo({
      url: 'category/category?d='+shopid
    })
  }
})