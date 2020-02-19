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
    wx.hideTabBar();
    let that = this;
    let tips = '';
    let taps = '';
    that.setData({
      url: ''
    });
    if (app.globalData.takes && app.globalData.takes != null && app.globalData.takes != undefined) {
      let takes = app.globalData.takes;
      tips = takes.substring(0, takes.length / 2);
      taps = takes.substring((takes.length / 2));
    }
    that.setData({
      url: app.globalData.domain + '/weconnect-front/dist/miniprograms-rm-tools/index.html#/' + app.globalData.path + '?login=' + app.globalData.login + '&tag=' + app.globalData.openId + '&tips=' + tips + '&taps=' + taps + '&isManager=' + app.globalData.isManager + '&internalRole=' + app.globalData.internalRole + '&local=' + app.globalData.local + '&error=200'
    })
    console.log(that.data.url);
    app.globalData.local = '';
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
      imageUrl:'/pictures/share.jpg'
    }
  }
})