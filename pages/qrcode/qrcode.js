// pages/qrcode/qrcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("请使用'学信网报告在线验证'微信小程序扫码验证,#923171444089#".substring(25,37))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  saoma: function () {
    // wx.navigateTo({
    //   url: '../qrdetail/qrdetail?code=565043304260',
    // })
    // return

    wx.scanCode({
      // onlyFromCamera: false,
      success: (res) => {
        console.log(res.result);
        // 请使用“学信网报告在线验证”微信小程序扫码验证，#923171444089#
        if (res.result.substr(24,1) === '#' && res.result.substr(37,1) === '#') {
          this.setData({
            tip: ''
          })
          wx.navigateTo({
            url: '../qrdetail/qrdetail?code=' + res.result.substr(25, 12),
          })
        } else {
          this.setData({
            tip: '错误的二维码:'
          })
        }
      },
      fail: () => {
        this.setData({
          tip: '错误的二维码'
        })
      }
    })
  }
})