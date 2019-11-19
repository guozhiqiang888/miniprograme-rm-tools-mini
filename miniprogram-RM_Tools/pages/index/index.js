let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    code:'',
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.hideTabBar({});
    let that = this;
    that.setData({
      url: ''
    });
    if (options != undefined && options.weburl != undefined){
      that.setData({
        path: options.weburl,
      })
    }
    wx.login({
      success: function (res) {
        console.log(res);
        that.setData({
          code: res.code
        })
        wx.request({
          url: 'https://uat-cmb-wechat.services.hsbc.com.cn/weconnect-front/v1/person/wechat/' + that.data.code,
          method: 'post',
          header: {
            'MessageIdentification': '234234'
          },
          data: {},
          success:function(res){
            console.log(726378126378216);
            console.log(res);
            app.globalData.openId = res.data.data.openId;
            that.setData({
              url: 'https://uat-cmb-wechat.services.hsbc.com.cn/weconnect-front/dist/miniprograms-rm-tools/index.html#/' + that.data.path + '?login=' + res.data.data.login + '&openId=' + res.data.data.openId + '&token=' + res.data.data.token + '&isManager=' + res.data.data.isManager + '&internalRole=' + res.data.data.internalRole
            })
            console.log(that.data.url);
          }
        })
      }
    })
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