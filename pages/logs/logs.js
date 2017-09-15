//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    events:[
      {
        id:1,
        title: "123",
        date:"2017/07/25 14:50:21",
        finished: true
      },
      {
        id: 2,
        title: "1234",
        date: "2017/07/25 14:50:21",
        finished: true
      },
      {
        id: 3,
        title: "1235",
        date: "2017/07/25 14:50:21",
        finished: true
      }
    ]
  },
  checkboxChange: function(e) {
    console.log(e.detail.value)
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
