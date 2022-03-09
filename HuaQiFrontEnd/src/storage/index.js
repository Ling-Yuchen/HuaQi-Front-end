import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局state对象，用于保存所有组件的公共数据
const state = {
  user: {
    name: '',
    email: '',
    isVIP: ''
  },
  companyData: {
    data1: 0.0,
    data2: 0.0,
    data3: 0.0
  }
}

// 用于监听state对象的值的最新状态（计算属性）
const getters = {
  getUser (state) {
    return state.user
  },
  getCompanyData (state) {
    return state.companyData
  }
}

// 唯一可以修改state对象的值的方法（同步）
const mutations = {
  updateUser (state, user) {
    state.user = user
  },
  updateVIPState (state, isVIP) {
    state.user.isVIP = isVIP ? 'true' : 'false'
  },
  updateCompanyData (state, data) {
    state.companyData = data
  }
}

// 异步执行mutations中的方法
const actions = {
  asyncUpdateUser (context, user) {
    context.commit('updateUser', user)
  },
  asyncUpdateVIPState (context, isVIP) {
    context.commit('updateVIPState', isVIP)
  },
  asyncUpdateCompanyData (context, data) {
    context.commit('updateCompanyData', data)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
