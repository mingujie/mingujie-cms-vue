import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/containers/Full'
import Page404 from '@/views/pages/Page404'
import Login from '@/views/pages/Login'
import Dashboard from '@/views/Dashboard'
import BasicConfig from '@/views/system/BasicConfig'
import DevLog from '@/views/log/DevLog'
import PictureManager from '@/views/PictureManager'

import Article from '@/views/Article'
import ArticleList from '@/views/ArticleList'
import ArticleForm from '@/views/ArticleForm'
import SkinForm from '@/views/SkinForm'
import PhotoForm from '@/views/PhotoForm'
import VideoForm from '@/views/VideoForm'
import GameForm from '@/views/GameForm'
import RoleForm from '@/views/RoleForm'
import HeroForm from '@/views/HeroForm'


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
    path: '/resource-manager',
    name: '素材管理',
    component: Full,
    icon: 'picture',
    children: [
      {
        path: 'picture',
        name: '图片设置',
        component: PictureManager,

        meta: { role: ['admin'] }
      }
    ] 
  },
  {
    path: '/system',
    name: '系统配置',
    component: Full,
    icon: 'setting',
    redirect: '/system/basic-config',

    children: [
      {
        path: 'basic-config',
        name: '基本配置',
        component: BasicConfig,
        meta: { role: ['admin'] }
      }
    ]
  },
  {
    path: '/content',
    name: '内容管理',
    component: Full,
    icon: '',
    children: [
    {
      path: 'articlelist',
      name: '文章列表',
      routerName: 'articlelist',
      component: ArticleList,
      children: [{
        path: '/articleform',
        name: 'ArticleForm',
        routerName: 'ArticleForm',
        component: ArticleForm  
      }]
    }]
  }
]