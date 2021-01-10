import request from "./request";

// 获取用户openid
export const loginWX = data => request("POST", "/user/loginWXMiniProgram", data);
