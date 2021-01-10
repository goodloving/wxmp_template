import errorList from "../config/errorList"
const app = getApp()
/**
 * 对接口返回的后端错误进行格式转化
 * @param {接口成功返回的数据} res 
 */
const formatError = (res) =>{
  let err = { message: "未知错误类型", type: "toast" }
  if (res.data) {
    const errCode = res.data.code
    if (errorList[errCode]) {
      err = errorList[code]
      fillTips(err, res)
    } else {
      err = errorList["*"]
      fillTips(err, res)
    }
  }
  showError(err)
}

/**
 * 对不同报错类型进行相应报错处理
 * @param {格式化后的报错数据} err 
 */
const showError =(err)=>{
  if (err.isShow) {
    return;
  }
  if (err.type === "confirm") {
    //判断是否已经有了confirm实例了
    if(app.globalData.hasConfirm){
      return
    }
    //没有confirm实例，新建confirm实例
    let confirm = wx.showModal({
      title: err.title,
      content: err.message,
      success () {
        app.globalData.hasConfirm = ""
      }
    })
    //存入全局变量管理
    app.globalData.hasConfirm = confirm
  } else if (err.type === "toast") {
    wx.showToast({
      title: err.message,
      mask: false,
      icon: 'none',
      duration: 3000
    })
  } else if (err.type === "relogin") {
    //删除storage中的token
    wx.removeStorageSync(wx.$KEYS.TOKEN)
    //唤起重登录
    relogin();
  }
}

/**
 * 对报错数据中数据进行填充替换
 * @param {报错数据} err 
 * @param {接口返回数据} res 
 */
const fillTips = (err, res) => {
  err.message = err.message.replace(/\{\{code\}\}/g, res.data.code)
  err.message = err.message.replace(/\{\{message\}\}/g, res.data.message)
}

export default formatError;