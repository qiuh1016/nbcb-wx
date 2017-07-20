//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    value_1: 5.0,
    value_2: 120,
    value_3: 1,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  inputValue_1: function (e) {
    this.setData({
      value_1: e.detail.value
    })
  },
  inputValue_2: function (e) {
    this.setData({
      value_2: e.detail.value
    })
  },
  inputValue_3: function (e) {
    this.setData({
      value_3: e.detail.value
    })
  },
  getshouyi: function () {
    var shouyilv = this.data.value_1
    var qixian = this.data.value_2
    var money = this.data.value_3
    var shouyi = shouyilv * qixian / 365 * money * 100
    wx.showToast({
      title: shouyi.toFixed(2) + "元",
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
