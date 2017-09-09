import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Page404 from '@/views/pages/Page404'
import Login from '@/views/pages/Login'
import Dashboard from '@/views/Dashboard'
import BasicConfig from '@/views/system/BasicConfig'
import DevLog from '@/views/log/DevLog'

Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Page404, hidden: true },
  {
    path: '/',
    component: Full,
    name: 'Home',
    redirect: '/log/dev',
    hidden: true
  },
  {
    path: '/log',
    component: Full,
    name: 'log',
    redirect: '/dev',
    hidden: true,
    children: [{ path: 'dev', component: DevLog, name: 'devlog' }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


export const asyncRouterMap = [
  {
    path: '/system',
    name: 'System',
    component: Full,
    icon: 'setting',
    redirect: '/system/basic-config',
    children: [
      {
        path: 'basic-config',
        name: 'BasicConfig',
        component: BasicConfig,
        meta: { role: ['admin'] }
      }
    ]
  }
]