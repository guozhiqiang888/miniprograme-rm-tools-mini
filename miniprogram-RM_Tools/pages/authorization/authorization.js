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
    wx.hideTabBar();
    console.log(app.globalData.openId);
  },
  getPhoneNumber(e) {
    let that = this;
    console.error('get phoneNum'+e);
    wx.checkSession({
　　　　success: function () {
　　　　　　console.log("处于登录态");
          that.checkWhitelist(e);
　　　　},
　　　　fail: function () {
          console.error('checking fail');
　　　　　　wx.login({
            success: function (res) {
              console.log(res);
              console.error('login success');
              that.getOpenIdFunction(res.code, 1);
            }
            ,
            fail:function(){
              wx.switchTab({
                url: '../error/error'
              });
            }
          })
　　　　}
    })
  },
  getOpenIdFunction(code, callNum){
    var that = this;
    wx.request({
      url: app.globalData.domain + '/weconnect-front/v1/person/wechat/' + code,
      method: 'post',
      header: {
        'MessageIdentification': that.getMessageId()
      },
      data: {},
      success: function (res) {
        console.log(res);
        if (res.data.code == 200) {
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
          that.checkWhitelist(e);
        }
      },
      fail: function (res) {
        if(1 == callNum){
          that.getOpenIdFunction(res.code, 2);
        }else{
          wx.switchTab({
            url: '../errorinternet/errorinternet'
          });
        }
      }
    })
  },
  checkWhitelist(e){
    console.log(decodeURIComponent(app.globalData.openId));
    let that = this;
    wx.request({
      url: app.globalData.domain + '/weconnect-front/v1/person/wechat/whitelist',
      method: 'post',
      header: {
        'MessageIdentification': that.getMessageId()
      },
      data: {
        "iv": e.detail.iv,
        "encryptedData": e.detail.encryptedData,
        "openId": decodeURIComponent(app.globalData.openId)
      },
      success: function (res) {
        console.log(res);
        if (res.data.code == 200) {
          if (res.data.data == true) {
            wx.switchTab({
              url: '../blank/blank'
            });
          }
          if (res.data.data == false) {
            wx.switchTab({
              url: '../error/error'
            });
          }
        }else{
          wx.switchTab({
            url: '../error/error'
          })
        }
      },
      fail: function(res){
        wx.switchTab({
          url: '../error/error'
        })
        // console.log('@@@' + JSON.stringify(res));
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'WeConnect', 
      path: '/pages/index/index',
      imageUrl: '/pictures/share.jpg'
    }
  }
})