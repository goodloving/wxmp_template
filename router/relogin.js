export default () => {
  //直接进入小程序登录授权页
  wx.reLaunch({
    url: '/pages/login/login',
  })
}