// pages/rmhome/rmhome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:"1",
    pageInfo:{
      slidebutton1: ""
    },
    reports:{
      showView: false //show report generted view
    },
    zIndexHid:"", // for search box hidden
    taskFoucs: true, //this is for border of task/reports
    reportsFoucs: false,
    swiper:{
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      current: 0
    },
    tasksInfor:[],
    hidden:"hidden",
    filterShow: false,
    filterIconHidden: "",
    dropdownList: [ //for report dropdow box
      { name: "Choose report type",selected: false },
      { name: "RM preference",selected: true },
      { name: "RM report",selected:false }
    ],
    prospectDropdownList: [ //for report dropdown list
      { name: "WellSpring & Co", selected: false },
      { name: "Tiger Industrial", selected: true },
      { name: "Second Time Investment", selected: false },
      { name: "Ping International Ltd", selected: false },
      ],
    listData: [ // mail table infor
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "Lorem ipsurm dolor sit amet consectetur adipiscing elit. Porin luctus. esta euismod" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" },
      { "timeline": "20.08.2019", "actionst": "Date of assigment", "notes": "" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    const role = "1" //getApp().globalData['role'];
    let pageInfo = {
    }
    getApp().getNls(_this,function(){
      if(role == '2'){
        pageInfo['slidebutton1'] = _this.data.nls.rmhome.panel.sector;
        pageInfo['slidebutton2'] = _this.data.nls.rmhome.panel.briefing;
      } else {
        pageInfo['slidebutton1'] = _this.data.nls.rmhome.panel.tasks;
        pageInfo['slidebutton2'] = _this.data.nls.rmhome.panel.reports
      }
      _this.setData({
        role: role,//
        pageInfo: pageInfo
      });
    });
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
  switchPanel: function(event) {
    let _this = this;
    let swiper = _this.data.swiper;
    let target = event.currentTarget.id || event.detail.current;
    switch (target){
      case 1:
      case "1":
        _this.setData({ taskFoucs: false, reportsFoucs: true });
        swiper.current = 1;
        _this.setData({
          filterIconHidden:"hidden"
        })
        _this.setData({ swiper: swiper});
        break;
      case 0:
      case "0":
      case "Sector Insights":
      case "Tasks":
        swiper.current = 0;
        _this.setData({
          filterIconHidden: ""
        })
        _this.setData({ swiper: swiper });
        _this.setData({ taskFoucs: true, reportsFoucs: false });
        break;
      default:
        _this.setData({ taskFoucs: true, reportsFoucs: false });
        break;
    }
  },
  mySelect : function(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  bindShowMsg : function() {
    this.setData({
      select: !this.data.select
    })
  },
  onFilterHandler:function(e){
    console.log('parent');
    this.setData({
      filterShow: e.detail.filterShow,
      hidden: e.detail.hidden
    });
  },
  getDetails:function(e){
    wx.navigateTo({
      url: '../taskdetail/taskdetail',
    })
  },
  generateReport:function(){
    let reportss = {
        showView: true
    }
    this.setData({
      reports: reportss
    });
  },
  back:function(){
    let reportss = {
      showView: false
    }
    this.setData({
      reports: reportss
    });
  },
  bindinput:function(e){
    console.log(e);
  },
  mail: function (e) {
    let zIndex = '';
    let deviceInfo = wx.getSystemInfoSync();
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    })
    if ("send" == e.detail.target || "cancel" === e.detail.target){
      zIndex = "";
      animation.translate(0, 0).step();
    }else{
      zIndex = "z-index-hidden";
      animation.translate(0, -deviceInfo.windowHeight).step();
    }
    this.setData({
      zIndexHid: zIndex,
      mailAnimation: animation.export()
    });
  },
  sectorDetails(e){
    wx.navigateTo({
      url: '../sectordetails/sectordetails',
    })
  },
  briefingEvent(e){
    wx.navigateTo({
      url: "../brifingdetails/brifingdetails",
    })
  },
  addprospect(){
    wx.navigateTo({
      url: '../prospectinfo/prospectinfo',
    })
  }
})