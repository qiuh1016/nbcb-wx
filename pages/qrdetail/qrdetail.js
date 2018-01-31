// pages/qrdetail/qrdetail.js
var util = require('../../utils/util.js')
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
    var dataJson = {
      "723194408932": '{"name":"张庆丰","sex":"男","idcard":"330411197307260616","nation":"汉族","birthday":"1973年7月26日","school":"四川农业大学","education":"专科","school_xi":"","school_class":"","school_major":"水利水电工程","school_number":"0712560215088","school_form":"网络教育","school_type":"网络教育","school_year":"3年","school_time":"2004年9月1日","school_status":"毕业（毕业日期：2007年7月1日）","code":"7231 9440 8932","update_time":"2018年1月27日"}',
      "565043304260": '{"name":"戴志峰","sex":"男","idcard":"330411197511100636","nation":"汉族","birthday":"1975年11月10日","school":"四川大学","education":"专科","school_xi":"","school_class":"","school_major":"水利水电工程","school_number":"0613587615245","school_form":"网络教育","school_type":"网络教育","school_year":"3年","school_time":"2003年9月1日","school_status":"毕业（毕业日期：2006年6月30日）","code":"5650 4330 4260","update_time":"2018年1月27日"}',
      "512361504560": '{"name":"王勇","sex":"男","idcard":"512201197605291359","nation":"汉族","birthday":"1976年5月29日","school":"重庆大学","education":"专科","school_xi":"","school_class":"","school_major":"水利水电工程","school_number":"0413057650786","school_form":"网络教育","school_type":"网络教育","school_year":"3年","school_time":"2001年9月1日","school_status":"毕业（毕业日期：2004年6月30日）","code":"5123 6150 4560","update_time":"2018年1月27日"}',
      "512361504480": '{"name":"胡顺军","sex":"男","idcard":"512221197512261519","nation":"汉族","birthday":"1975年12月26日","school":"重庆大学","education":"专科","school_xi":"","school_class":"","school_major":"水利水电工程","school_number":"0413057650654","school_form":"网络教育","school_type":"网络教育","school_year":"3年","school_time":"2001年9月1日","school_status":"毕业（毕业日期：2004年6月30日）","code":"5123 6150 4480","update_time":"2018年1月27日"}',
      "322164807852": '{"name":"陈宝明","sex":"男","idcard":"512221196512011697","nation":"汉族","birthday":"1965年12月1日","school":"浙江工业大学","education":"专科","school_xi":"","school_class":"","school_major":"水利水电工程","school_number":"0318672867066","school_form":"成人教育","school_type":"成人教育","school_year":"3年","school_time":"2000年9月1日","school_status":"毕业（毕业日期：2003年7月1日）","code":"3221 6480 7852","update_time":"2018年1月27日"}',
    }

    var jsonStr = dataJson[options.code];
    var json = JSON.parse(jsonStr);
    this.setData({
      name: json.name,
      sex: json.sex,
      idcard: json.idcard,
      nation: json.nation,
      birthday: json.birthday,
      school: json.school,
      education: json.education,
      school_xi: json.school_xi,
      school_class: json.school_class,
      school_number: json.school_number,
      school_major: json.school_major,
      school_year: json.school_year,
      school_type: json.school_type,
      school_form: json.school_form,
      school_status: json.school_status,
      school_time: json.school_time,
      code: json.code,
      update_time: json.update_time,
    })

    /*
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(
      () => {
        this.setData({
          id: options.id,
          name: '张艳霞',
          sex: '女',
          idcard: '330411199009034628',
          nation: '汉族',
          birthday: '1990年09月03日',
          school: '电子科技大学',
          education: '本科'
        })
        wx.hideLoading()
      }, 2000
    )
    */
    
    /*
    wx.request({
      url: "http://op.juhe.cn/onebox/weather/query",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      //data: { cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" },  
      data: util.json2Form({ cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" }),
      complete: function (res) {
        that.setData({
          toastHidden: false,
          toastText: res.data.reason,
          city_name: res.data.result.data.realtime.city_name,
          date: res.data.result.data.realtime.date,
          info: res.data.result.data.realtime.weather.info,
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })  
    */
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
  
  }
})