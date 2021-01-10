//index.js
//获取应用实例
const app = getApp()
import { loginWX } from "../../servers/apis/user"

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false
  },
  //获取用户手机号
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  onLoad: function () {
    //获取code传给后端
    wx.login({
      success(res) {
        console.log("code", res);
        console.log(app.globalData.host);
        loginWX({
          code: res.code
        }).then().catch()
      },
      fail(err) {
        console.log("err", err);
      }
    })
  },
  gotoTest(){
    wx.router.push(
      "TEST"
    )
  }
})