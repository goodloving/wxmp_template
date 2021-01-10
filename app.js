import router  from "./router/router.js"
import keys from "./config/keys"
import globalData from "./config/globalData"
//全局注册
wx.router = router
wx.$KEYS = keys

//app.js
App({
  //监听小程序初始化
  onLaunch(options) {
    console.log("onLaunch")
    //获取小程序初始进入的页面信息
    let launchInfos = wx.getLaunchOptionsSync()
    //将当前页面路由存入全局的数据管理中
    this.globalData.currentPage = launchInfos.path
  },
  //监听小程序启动或切前台
  onShow(options) {
    console.log("onShow")
  },
  //监听小程序切后台
  onHide() {
    console.log("onHide")
  },
  //错误监听函数
  onError(msg) {
    console.log(msg)
  },
  //页面不存在监听函数
  onPageNotFound(res) {
    console.log("onPageNotFound")
    wx.redirectTo({
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  //未处理的 Promise 拒绝事件监听函数
  onUnhandledRejection(res) {
    console.log(res)
  },
  //监听系统主题变化
  onThemeChange(res) {
    console.log(res)
  },
  //全局数据存储
  globalData: globalData
})