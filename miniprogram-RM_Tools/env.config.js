
const dateTime = new Date().getTime();
export const envSettings = {
  prod:{
    env:'prod',
    domain: 'https://cmb.wechat.hsbcnet.com',
    contentKey:'/weconnect-front',
    basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
  },
  sit:{
    env:'sit',
    domain:'https://uat-cmb-wechat.services.hsbc.com.cn',
    contentKey:'/sit-weconnect-wechat-frontend',
    basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
  },
  uat:{
    env:'uat',
    domain:'https://uat-cmb-wechat.services.hsbc.com.cn',
    contentKey:'/weconnect-front',
    basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
  },
  newInfra:{
    prod:{
      env:'prod',
      domain:"https://ecommerce-merchant-uat.business.hsbc.com.cn",
      contentKey:"/weconnect-front",
      basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
    },
    sit:{
      env:'sit',
      domain:"https://ecommerce-merchant-sit.business.hsbc.com.cn",
      contentKey:"/sit-weconnect-wechat-frontend",
      basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
    },
    uat:{
      env:'uat',
      domain:"https://ecommerce-merchant-uat.business.hsbc.com.cn",
      contentKey:"/weconnect-front",
      basePath: "/dist/miniprograms-rm-tools/index.html?date="+ dateTime
    }
  }
}