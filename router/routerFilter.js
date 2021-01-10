import login from "./relogin"

export default () => {
  //获取storage中是否有token存在
  let token = wx.getStorageSync(wx.$KEYS.TOKEN)
  console.log("token",token);
  
  if(!token || token === undefined || token === null){
    //没有token之间调起重登陆
    login()
  }
}