//index.js
//获取应用实例
const app = getApp()
var order = ['first', 'second', 'third', 'fouth', 'fifth']
Page({
  data: {
    inHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    toTabItem: 'first',
    // subStatus: false,
    eventData:[
      {
        id: 0,
        eventTitle: '「共享单车」',
        eventDescText: '共享经济时代来临？',
        backgroundImage: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1135627767,1513459953&fm=27&gp=0.jpg",
        zhihuLogo: '../../assets/img/zhihu_logo.jpg',
        subBtn: '订阅此事件',
        subStatus: 'false',
      },
      {
        id: 1,
        eventTitle: '「韩国总统弹劾」',
        eventDescText: '朴槿惠的悲与哀',
        backgroundImage: "http://i9.hexun.com/2018-02-28/192525250.jpg",
        zhihuLogo: '../../assets/img/zhihu_logo.jpg',
        subBtn: '订阅此事件',
        subStatus: 'false',
      },
      {
        id: 2,
        eventTitle: '「电视剧《人民的名义》热播」',
        eventDescText: '现象级电视剧的诞生',
        backgroundImage: "http://img.zcool.cn/community/01f7095942a948a8012193a341dbfd.jpg@1280w_1l_2o_100sh.jpg",
        zhihuLogo: '../../assets/img/zhihu_logo.jpg',
        subBtn: '订阅此事件',
        subStatus: 'false',
      },
      {
        id: 3,
        eventTitle: '「乐视 贾跃亭」',
        eventDescText: '这次，窒息什么？',
        backgroundImage: "http://www.xinhuanet.com/fortune/2017-07/05/1121264586_14992140609651n.jpg",
        zhihuLogo: '../../assets/img/zhihu_logo.jpg',
        subBtn: '订阅此事件',
        subStatus: 'false',
      },
      {
        id: 4,
        eventTitle: '「江歌案件发酵」',
        eventDescText: '每个人嘴里的真相',
        backgroundImage: "http://www.chinairn.com/UserFiles/image/20180125/20180125155046_9226.jpg",
        zhihuLogo: '../../assets/img/zhihu_logo.jpg',
        subBtn: '订阅此事件',
        subStatus: 'false',
      },
    ],
    /** 
     * 页面配置 
     */
    // winWidth: 0,
    // winHeight: 0,
  },

  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  /**
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  /**
   * 点击tab切换 
   */
  switchNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.setData({ toTabItem: order[e.detail.current]})
  },

  // subscriptionbtn: function(e){

  //   if ('true' == e.Target.dataset.substatus){
  //     wx.showToast({
  //       title: e.Target.dataset.substatus,  //标题
  //       icon: 'success',  //图标，支持"success"、"loading"  
  //       duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
  //       mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false 
  //     })
  //     that.setData({
  //       subStatus: true,
  //       subBtn: "取消订阅",
  //     })
  //   }else{
  //     wx.showToast({
  //       title: '已取消',  //标题  
  //       icon: 'success',  //图标，支持"success"、"loading"  
  //       duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
  //       mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false 
  //     })
  //     that.setData({
  //       subStatus: false,
  //       subBtn: "订阅此事件",
  //     })
  //   }
  // }

  subscriptionbtn: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.id;
    
    if ('false' === e.currentTarget.dataset.substatus){
      wx.showToast({
        title: '订阅成功',  //标题  
        icon: 'success',  //图标，支持"success"、"loading"  
        duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
        mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false 
      })
      this.setData({
        ['eventData[' + index + '].subBtn']: '取消订阅',
        ['eventData[' + index + '].subStatus']: 'true'
      })
    }else{
      wx.showToast({
        title: '已取消',  //标题  
        icon: 'success',  //图标，支持"success"、"loading"  
        duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
        mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false 
      })
      this.setData({
        ['eventData[' + index + '].subBtn']: '订阅此事件',
        ['eventData[' + index + '].subStatus']: 'false'
      })
    }
  }
})
