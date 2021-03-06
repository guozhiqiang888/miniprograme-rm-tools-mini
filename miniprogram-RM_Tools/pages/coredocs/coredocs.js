let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    tid:'',
    domain: app.globalData.domain + app.globalData.contentKey,
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    const url = this.data.domain + options['weburl']
    that.setData({
      // path: options.weburl,
      tid: options.tid,
      url: options.weburl
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'WeConnect', 
      path: '/pages/navagitor/navagitor',
      imageUrl: '/pictures/share.jpg'
    }
  }
})