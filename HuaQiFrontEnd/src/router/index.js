import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Search from '@/components/Search'
import ResultPage from '@/components/ResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/result',
      name: 'result',
      component: ResultPage
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
