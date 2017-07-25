//获取应用实例
var app = getApp()
Page({
  data: {
    // value_1: 5.0,
    // value_2: 120,
    // value_3: 1,
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
    wx.setStorage({
      key: "tab2_value_1",
      data: e.detail.value,
    })
  },
  inputValue_2: function (e) {
    this.setData({
      value_2: e.detail.value
    })
    wx.setStorage({
      key: "tab2_value_2",
      data: e.detail.value,
    })
  },
  inputValue_3: function (e) {
    this.setData({
      value_3: e.detail.value
    })
    wx.setStorage({
      key: "tab2_value_3",
      data: e.detail.value,
    })
  },
  getshouyi: function () {
    var shouyilv = this.data.value_1
    var qixian = this.data.value_2
    var money = this.data.value_3
    var shouyi = shouyilv * qixian / 365 * money * 100
    // wx.showToast({
    //   title: shouyi.toFixed(2) + "元",
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.showModal({
      title: '收益',
      content: shouyi.toFixed(2) + "元",
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.setData({
      value_1: wx.getStorageSync('tab2_value_1') === '' ? 5.2 : wx.getStorageSync('tab2_value_1'),
      value_2: wx.getStorageSync('tab2_value_2') === '' ? 120 : wx.getStorageSync('tab2_value_2'),
      value_3: wx.getStorageSync('tab2_value_3') === '' ? 1 : wx.getStorageSync('tab2_value_3'),
    })
  }
})
