import formatError from "../requestFilter"
const app = getApp()

/**
 * 接口请求封装
 * @param {请求方式} method 
 * @param {请求的url} url 
 * @param {请求传递的数据} data 
 */
const request = (method, url, data) => {
  //设置请求头中token
  const header = {
    'Authentication': ""
  }
  //promise封装一层，使得调用的时候直接用then和catch接收
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      url: app.globalData.host + url, //完整的host
      data: data,
      header: header,
      success(res) {
        //对成功返回的请求进行数据管理
        if(res.statusCode === 200){
          if(res.data && res.data.code === "SUC0000"){
            resolve(res.data)
          }else{
            formatError(res)
            reject(res.data)
          } 
        }else{
          reject(res.data)
        }
      },
      fail(err) {
        wx.showToast({
          title: '网络异常，稍后再试！',
          mask: true,
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
}
export default request;


