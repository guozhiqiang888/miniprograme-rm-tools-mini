// pages/login/login.js
// var nls_label = require('../NLS/nls_zh.js');
// let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    code:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      path: options.weburl
    })
    wx.login({
      success: function (res) {
        console.log(res);
        that.setData({
          code: res.code
        })
        wx.request({
          url: 'https://uat-cmb-wechat.services.hsbc.com.cn/weconnect-front/v1/person/wechat/' + that.data.code,
          method: 'post',
          data: {},
          success:function(res){
            console.log(res);
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

  },
  goToHome(e){
    app.languageSwitch(e.target.id);
    // wx.switchTab({
    //   url: '../rmhome/rmhome',
    // })
    wx.navigateTo({
      url: '../test/test',
    })
  },
  onborading(){
    wx.navigateTo({
      url: '../onborading/onborading',
    })
  }
})