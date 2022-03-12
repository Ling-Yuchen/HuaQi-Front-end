import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import MacroData from '@/views/MacroData'
import UserNotice from '@/views/UserNotice'
import UserCenter from '@/views/UserCenter'
import SearchResult from '@/views/SearchResult'
import UserAgreement from '@/views/UserAgreement'
import IndustryRisk from '@/components/charts/IndustryRisk'
import StockVolatility from '@/components/charts/StockVolatility'
import StockSharpeRatio from '@/components/charts/StockSharpeRatio'
import ExchangeRateRisk from '@/components/charts/ExchangeRateRisk'
import FinancialLeverage from '@/components/charts/FinancialLeverage'
import CompanyInformation from '@/components/charts/CompanyInformation'
import ManagementOrganization from '@/components/charts/ManagementOrganization'
import ForeignExchangeExposure from '@/components/charts/ForeignExchangeExposure'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user-agreement',
      name: 'user-agreement',
      component: UserAgreement
    },
    {
      path: '/user-notice',
      name: 'user-notice',
      component: UserNotice
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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user-center',
      name: 'user-center',
      component: UserCenter
    },
    {
      path: '/macro-data',
      name: 'macro-data',
      component: MacroData
    },
    {
      path: '/search-result',
      name: 'search-result',
      component: SearchResult,
      children: [
        {
          path: '/exchange-rate-risk',
          name: 'exchange-rate-risk',
          component: ExchangeRateRisk
        },
        {
          path: '/financial-leverage',
          name: 'financial-leverage',
          component: FinancialLeverage
        },
        {
          path: '/foreign-exchange-exposure',
          name: 'foreign-exchange-exposure',
          component: ForeignExchangeExposure
        },
        {
          path: '/management-organization',
          name: 'management-organization',
          component: ManagementOrganization
        },
        {
          path: '/stock-volatility',
          name: 'stock-volatility',
          component: StockVolatility
        },
        {
          path: '/stock-sharpe-ratio',
          name: 'stock-sharpe-ratio',
          component: StockSharpeRatio
        },
        {
          path: '/industry-risk',
          name: 'industry-risk',
          component: IndustryRisk
        },
        {
          path: '/company-information',
          name: 'company-information',
          component: CompanyInformation
        }
      ]
    }
  ]
})
