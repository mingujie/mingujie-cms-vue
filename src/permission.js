import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/cookie/auth' // 获取储存在本地的Token

const whiteList = ['/login']  //可访问的路由

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {  //如果存在代表用户已经登录过

    if (to.path === '/login') {  //如果当前路由为login 直接调转到路由/
      next({ path: '/' })
    } else { //如果当前路由不为login
      if (store.getters.roles.length === 0) { //如果路由名单为空，重新获取路由名单
        store.dispatch('GetInfo').then(res => {
          const roles = res.data.role
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({ ...to })
          })
        })
      } else { //如果路由名单不为空，直接进入该路由
        next() //
      }
    }
  } else {
    console.log(whiteList.indexOf(to.path))
    if (whiteList.indexOf(to.path) !== -1) {  //校验当前路由是否属于白名单类，如果是，就继续访问
      next()//进入当前路由
    } else {  //如果不是 直接切换到登录页
      next('/login')
      NProgress.done()  //结束Progress
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
