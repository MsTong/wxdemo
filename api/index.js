
// 基础函数


/**
*  请求业务接口基本方法
*
* @param {Object} [data={}] - 对应wx.request里data参数
* @param {Object} [opts={}] - 对应wx.request里其他参数
* @returns {Promise}
*/
import config from '/api/config.js';
export function fetch(data = {}, opts = {}) {
  // 通用设置
  const options = {
    url: config.api,
        header: {
      'cookie': `your_key=your_value;`
    }
  }

  return new Promise((resolve, reject) => {
    wx.request({
      ...Object.assign(options, opts),
      data,
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err);
      }
    })
  })
    .then(checkStatus)
    .catch(() => {
      // do something
    })
}


//全局异常处理


/**
*  接口返回值状态判断
*
* @param {Object} response - 接口返回值
* @returns {Promise}
*/
function checkStatus(response) {
  let msg = '';
  if (response.statusCode >= 200 && response.statusCode < 300) {
    let { code } = response.data
    switch (code) {
      case 0:
        // 请求成功，返回一个Promise对象
        return Promise.resolve(response.data);
        break;
      case 1:
        // 处理token过期的情况
        wx.removeStorageSync("token");
        msg = '哎哟，登录超时，刷新试试';
        break;
      default:
        msg = '哎哟，服务异常，刷新试试';
        break;
    }
  }
  // 防止重复跳转
  if (getCurrentPageUrl() != 'pages/error/error') {
    wx.navigateTo({
      url: `/pages/error/error?msg=${msg}`
    });
  }
}



/**
* 获取当前页面url
* @returns {String}  当前页面url
*/
function getCurrentPageUrl() {
  let pages = getCurrentPages()    //获取加载的页面
  let currentPage = pages[pages.length - 1]    //获取当前页面的对象
  return currentPage.route    //当前页面url
}

//带Token的请求函数

/**
*  带token的请求业务接口
*
* @param {Object} [data={}] - 对应wx.request里data参数，也就是query部分
* @param {Object} [opts={}] - 对应wx.request里其他参数
* @returns {Promise}
*/
export function fetchWithToken(data = {}, opts = {}) {
  const token = wx.getStorageSync('token');
  if (token) {
    data.token = token;
    return fetch(data, opts)
  } else {
    return getToken().then((token) => {
      data.token = token;
      return fetch(data, opts);
    })
  }
}

/**
* 获取token
* @returns {String} token token值
*/
function getToken() {
  // 返回一个Promise对象
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        if (res.code) {
          let data = {
            code: res.code
          };
          fetch(data).then((res) => {
            const { token } = res;
            // 把token放在storage中
            wx.setStorageSync("token", token);
            // 输出token
            resolve(token);
          });
        } else {
          console.log('code error');
        }
      },
      fail: function (err) {
        console.log('登录失败！' + err.errMsg);
      }
    })
  })
}