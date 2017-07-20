//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    value_1:5.5,
    value_2:1.5,
    value_3:3,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  inputValue_1: function(e) {
    this.setData({
      value_1: e.detail.value
    })
  },
  inputValue_2: function(e) {
    this.setData({
      value_2: e.detail.value
    })
  },
  inputValue_3: function(e) {
    this.setData({
      value_3: e.detail.value
    })
  },
  getshouyi: function () {
    var lixi_1 = this.data.value_1 * 100
    var lixi_2 = this.data.value_2 * 100
    var zhanbi = parseInt(this.data.value_3)

    var shouyilv = (lixi_1 * zhanbi + lixi_2) / (zhanbi + 1) / 100
    wx.showToast({
      title: "收益率：" + shouyilv.toPrecision(3) + "%",
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
