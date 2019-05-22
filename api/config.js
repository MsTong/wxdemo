let config = {
  timeout: 30000
}

// wdj
// 接口自动区分
const host = window.location.host
if (host === "m.fybanks.com") {//生产
  config.api = "https://mall-api.fybanks.com/"
  config.linkApi = "https://m.fybanks.com/"
  config.fullUrlPath = "https://m.fybanks.com/html/home/#/"
  config.imgServerUrl = "https://img[0].fybanks.com/"
  config.staticUrl = 'https://static.fybanks.com'
} else if (host === "m.heyoucloud.com") {//预生产
  config.api = "https://mall-api.heyoucloud.com/"
  config.linkApi = "https://m.heyoucloud.com/"
  config.fullUrlPath = "https://m.heyoucloud.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.heyoucloud.com'
} else if (host === "m.fybanks.cn") {//测试
  config.api = "https://mall-api.fybanks.cn/"
  config.linkApi = "https://m.fybanks.cn/"
  config.fullUrlPath = "https://m.fybanks.cn/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.fybanks.cn'
} else if (host === "m.hfqqjia.com") {//测试
  config.api = "https://mall-api.hfqqjia.com/"
  // config.api = "http://192.168.10.26:8081/"
  config.linkApi = "https://m.hfqqjia.com/"
  config.fullUrlPath = "https://m.hfqqjia.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.hfqqjia.com'

} else if (host === "m.9yuekj.com") {//测试
  config.api = "https://mall-api.9yuekj.com/"
  // config.api = "http://192.168.10.26:8081/"
  config.linkApi = "https://m.9yuekj.com/"
  config.fullUrlPath = "https://m.9yuekj.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.9yuekj.com'

} else if (host === "m.ijiuyue.com") {//测试
  config.api = "https://mall-api.ijiuyue.com/"
  // config.api = "http://192.168.10.26:8081/"
  config.linkApi = "https://m.ijiuyue.com/"
  config.fullUrlPath = "https://m.ijiuyue.com/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.ijiuyue.com'

} else {//本地
  // 默认线上
  // config.api = "https://mall-api.heyoucloud.com/"
  config.api = "https://mall-api.fybanks.cn/"
  config.linkApi = "https://m.fybanks.cn/"
  config.fullUrlPath = "https://m.fybanks.cn/html/home/#/"
  config.imgServerUrl = "https://img-test[0].fybanks.com/"
  config.staticUrl = 'https://static.fybanks.cn'
}
module.exports = config

