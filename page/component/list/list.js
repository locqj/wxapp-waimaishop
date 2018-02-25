// page/component/list/list.js
Page({
  data:{
    
  },
  onLoad:function(options){
    // 判断进入路由参数，进行相应路由渲染
    if (options.d === 'sx') {
      console.log('沙县')
      this.setData({
        banner: '/image/cx/banner.jpeg',
        c1: '/image/cx/c1.jpeg',
        c1t: '蒸饺',
        c1p: 3,
        c2: '/image/cx/c2.jpeg',
        c2t: '拌面',
        c2p: 4,
        c3: '/image/cx/c3.jpeg',
        c3t: '鸡腿饭',
        c3p: 15
      })
    } else if (options.d === 'ycyk') {
      console.log('优城悦客')
      this.setData({
        banner: '/image/ycyk/banner.jpg',
        c1: '/image/ycyk/c1.jpg',
        c1t: '牛柳意面',
        c1p: 32,
        c2: '/image/ycyk/c2.jpg',
        c2t: '特级牛肉',
        c2p: 48,
        c3: '/image/ycyk/c3.jpg',
        c3t: '鸡翅',
        c3p: 10
      })
    } else if (options.d === 'bk') {
      this.setData({
        banner: '/image/bk/banner.png',
        c1: '/image/bk/c1.png',
        c1t: '安格斯厚牛堡原味/天椒',
        c1p: 12,
        c2: '/image/bk/c2.png',
        c2t: '德州烟熏安格斯厚牛堡',
        c2p: 15,
        c3: '/image/bk/c3.png',
        c3t: '皇堡/天椒皇堡',
        c3p: 18
      })
      console.log('bk')
    } else if (options.d === 'ry') {
      console.log('如意馄饨')
      this.setData({
        banner: '/image/ry/banner.jpg',
        c1: '/image/ry/c1.jpg',
        c1t: '干香红椒馄饨',
        c1p: 13,
        c2: '/image/ry/c2.jpg',
        c2t: '金牌虾仁馄饨',
        c2p: 14,
        c3: '/image/ry/c3.jpg',
        c3t: '馄饨生煎',
        c3p: 20,
      })
    } else if (options.d === 'hdl') {
      console.log('海底捞')
      this.setData({
        banner: '/image/hdl/banner.jpeg',
        c1: '/image/hdl/c1.jpeg',
        c1t: '鱿鱼须',
        c1p: 15,
        c2: '/image/hdl/c2.jpeg',
        c2t: '墨鱼仔',
        c2p: 25,
        c3: '/image/hdl/c3.jpeg',
        c3t: '泥鳅',
        c3p: 35,
      })
    }
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})