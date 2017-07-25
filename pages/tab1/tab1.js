//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // bilvChecked: true,
    // value_1: 5.5,
    // value_2: 1.5,
    // value_3: 3,
    // value_4: 3,
    // value_5: 1,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  radioChange: function (e) {
    if (e.detail.value == "0") {
      this.setData(
        {
          bilvChecked: true
        }
      )
      wx.setStorage({
        key: "bilvChecked",
        data: true
      })
    } else {
      this.setData(
        {
          bilvChecked: false
        }
      )
      wx.setStorage({
        key: "bilvChecked",
        data: false
      })
    }
  },
  inputValue_1: function(e) {
    this.setData({
      value_1: e.detail.value
    })
    wx.setStorage({
      key: "tab1_value_1",
      data: e.detail.value,
    })
  },
  inputValue_2: function(e) {
    this.setData({
      value_2: e.detail.value
    })
    wx.setStorage({
      key: "tab1_value_2",
      data: e.detail.value,
    })
  },
  inputValue_3: function(e) {
    this.setData({
      value_3: e.detail.value
    })
    wx.setStorage({
      key: "tab1_value_3",
      data: e.detail.value,
    })
  },
  inputValue_4: function (e) {
    this.setData({
      value_4: e.detail.value
    })
    wx.setStorage({
      key: "tab1_value_4",
      data: e.detail.value,
    })
  },
  inputValue_5: function (e) {
    this.setData({
      value_5: e.detail.value
    })
    wx.setStorage({
      key: "tab1_value_5",
      data: e.detail.value,
    })
  },
  getshouyi: function () {
    var zhanbiChecked = this.data.bilvChecked
    var lixi_1 = this.data.value_1 * 100
    var lixi_2 = this.data.value_2 * 100
    var zhanbi = parseInt(this.data.value_3)
    var money_1 = parseFloat(this.data.value_4)
    var money_2 = parseFloat(this.data.value_5)

    var shouyilv 
    if (zhanbiChecked) {
      shouyilv = (lixi_1 * zhanbi + lixi_2) / (zhanbi + 1) / 100
    } else {
      shouyilv = (lixi_1 * money_1 + lixi_2 * money_2) / (money_1 + money_2) / 100
    }
    
    // wx.showToast({
    //   title: "收益率：" + shouyilv.toPrecision(3) + "%",
    //   icon: 'success',
    //   duration: 2000
    // })

    wx.showModal({
      title: '收益率',
      content: shouyilv.toPrecision(3) + "%",
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
    console.log('onLoad' + wx.getStorageSync('bilvChecked'))
    var that = this
    //调用应用实例的方法获取全局数据
    that.setData({
      bilvChecked: wx.getStorageSync('bilvChecked') === '' ? true : wx.getStorageSync('bilvChecked'),
      value_1: wx.getStorageSync('tab1_value_1') === '' ? 5.5 : wx.getStorageSync('tab1_value_1'),
      value_2: wx.getStorageSync('tab1_value_2') === '' ? 1.5 : wx.getStorageSync('tab1_value_2'),
      value_3: wx.getStorageSync('tab1_value_3') === '' ? 3 : wx.getStorageSync('tab1_value_3'),
      value_4: wx.getStorageSync('tab1_value_4') === '' ? 3 : wx.getStorageSync('tab1_value_4'),
      value_5: wx.getStorageSync('tab1_value_5') === '' ? 1 : wx.getStorageSync('tab1_value_5'),
    })
    // app.getUserInfo(function(userInfo){
    //   that.setData({
    //      userinfo: userInfo
    //   })
    // })
  }
})
