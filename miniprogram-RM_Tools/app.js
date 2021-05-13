//app.js
import { envSettings } from "./env.config"

App({
  globalData: {
    env:'sit',
    isNewInfra: true,
    openId:'',
    takes:'',
    path:'',
    login:'',
    internalRole:'',
    isManager:'',
    local:'',
    start:'',
    end:''
  },

  onLaunch: function () {
    if(this.globalData.isNewInfra){
      Object.assign(this.globalData, envSettings['newInfra'][this.globalData.env])
    }else{
      Object.assign(this.globalData, envSettings[this.globalData.env])
    }
  }
})