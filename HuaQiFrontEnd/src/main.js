import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './storage/index.js'
import * as echarts from 'echarts'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$store = store
Vue.config.productionTip = false

// 在每次路由跳转前验证用户是否处于登录状态
router.beforeEach((to, from, next) => {
  var isLogin = sessionStorage.getItem('isLogin')
  if (to.path === '/logout') {
    sessionStorage.removeItem('isLogin')
    next({path: '/'})
  } else if (to.path === '/login') {
    if (isLogin !== null) {
      next({path: '/user'})
    }
  } else if (isLogin === null) {
    if (to.path !== '/' &&
        to.path !== '/register' &&
        to.path !== '/user-notice' &&
        to.path !== '/user-agreement') {
      next({path: '/login'})
    }
  }
  if (to.path === '/search-result') {
    next({path: '/company-information'})
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
