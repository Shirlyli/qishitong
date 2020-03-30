import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/mint'
import axios from './api/axios'
import Axios from 'axios'
import './api/rem'
Vue.prototype.$api = Axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 判断当前页面的历史记录是不是小于等于1，如果小于等于1，说明这个页面没有可以返回的上一页，如果没有可以返回的上一页，就给地址栏加上一个goindex=true的参数，这样你从这个页面在往下一个页面跳转在返回，这个参数就一直加上的
Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
}
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (sessionStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
      console.log(to.fullPath)
    }
  } else {
    next()
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
