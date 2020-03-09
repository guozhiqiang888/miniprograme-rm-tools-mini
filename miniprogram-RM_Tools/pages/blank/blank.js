// pages/blank/blank.js
let app = getApp();
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
    app.globalData.path = '';
    app.globalData.takes = '';
    app.globalData.internalRole = '';
    app.globalData.isManager = '';
    let that = this;
    if (options != undefined && options.weburl != undefined) {
      app.globalData.path = options.weburl;
      app.globalData.start = options['start']?options['start']:'',
      app.globalData.end = options['end']? options['end']:''
    }
    wx.login({
      success: function (res) {
        console.log(res);
        wx.request({
          url: app.globalData.domain + '/weconnect-front/v1/person/wechat/' + res.code,
          method: 'post',
          header: {
            'MessageIdentification': that.getMessageId()
          },
          data: {},
          success: function (res) {
            console.log(res);
            if (res.data.code == 200) {
              console.log(res.data.data.openId);
              app.globalData.openId = res.data.data.openId;
              app.globalData.login = res.data.data.login;
              if (res.data.data.token && res.data.data.token != null && res.data.data.token != undefined) {
                app.globalData.takes = res.data.data.token;
              }
              if (res.data.data.internalRole && res.data.data.internalRole != null && res.data.data.internalRole != undefined) {
                app.globalData.internalRole = res.data.data.internalRole;
              }
              if (res.data.data.isManager && res.data.data.isManager != null && res.data.data.isManager != undefined) {
                app.globalData.isManager = res.data.data.isManager;
              }
              if (res.data.data.isPhoneAuthorized == true) {
                wx.switchTab({
                  url: '../index/index'
                });
              } else {
                wx.switchTab({
                  url: '../authorization/authorization'
                });
              }
            } else {
            }
          }
        })
      },
      fail: function(res){
        wx.navigateTo({
          url: '../error/error'
        })
      }
    })
  },
  getMessageId() {
    return (this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4());
  },
  S4() {
    return (((1 + Math.random()) * 0X10000) | 0).toString(16).substr(1);
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