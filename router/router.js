import routes from "../router/routerConfig";
import routerFilter from "./routerFilter"

/**
 * 对wx.navigateTo的封装
 * @param {路由} path 
 * @param {参数} params 
 * @param {事件} events 
 */
const push = (path, params, events) => {
  routerFilter()
  wx.navigateTo({
    url: routes[path] + `?query=${JSON.stringify(params)}`,
    events: events,
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })
}

/**
 * 对wx.redirectTo的封装
 * @param {路由} path 
 * @param {参数} params 
 */
const replace = (path, params) => {
  routerFilter()
  wx.redirectTo({
    url: routes[path] + `?query=${JSON.stringify(params)}`,
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })

}

/**
 * 对wx.navigateBack的封装
 * @param {返回的层级} number 
 */
const pop = (number) => {
  routerFilter()
  wx.navigateBack({
    delta: number,
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })
}

/**
 * 对wx.reLaunch的封装
 * @param {路由} path 
 * @param {参数} params 
 */
const relaunch = (path, params) => {
  routerFilter()
  wx.reLaunch({
    url: routes[path] + `?query=${JSON.stringify(params)}`,
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })
}

/**
 * 对tabbar的封装
 * @param {路由} path 
 */
const switchTab = (path) => {
  routerFilter()
  wx.switchTab({
    url: routes[path],
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })
}

module.exports = {
  push,
  replace,
  pop,
  relaunch,
  switchTab
}