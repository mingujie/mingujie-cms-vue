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
    meta: { role: ['editor'] },
    children: [
      {
        path: 'picture',
        name: '图片设置',
        component: PictureManager
      }
    ] 
  },
  {
    path: '/system',
    name: '系统配置',
    component: Full,
    icon: 'setting',
    redirect: '/system/basic-config',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'basic-config',
        name: '基本配置',
        component: BasicConfig
        
      }
    ]
  },
  {
    path: '/content',
    name: '内容管理',
    component: Full,
    icon: 'document',
    redirect: '/content/articlelist',
    meta: { role: ['editor'] },
    children: [
    {
      path: 'articlelist',
      name: '新闻',
      routerName: 'news',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'articleform',
      name: '创建文章',
      routerName: 'ArticleForm',
      hidden: true,
      component: ArticleForm  
    },    {
      path: 'photolist',
      name: '图集',
      routerName: 'photo',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'photoform',
      name: '创建图集',
      routerName: 'PhotoForm',
      hidden: true,
      component: PhotoForm  
    },    {
      path: 'skinlist',
      name: '皮肤',
      routerName: 'skin',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'skinform',
      name: '创建皮肤',
      routerName: 'SkinForm',
      hidden: true,
      component: SkinForm  
    },    {
      path: 'videolist',
      name: '视频',
      routerName: 'video',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'videoform',
      name: '创建皮肤',
      routerName: 'VideoForm',
      hidden: true,
      component: VideoForm  
    },    {
      path: 'herolist',
      name: '英雄',
      routerName: 'hero',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'heroform',
      name: '创建英雄',
      routerName: 'HeroForm',
      hidden: true,
      component: HeroForm  
    },    {
      path: 'rolelist',
      name: '职业',
      routerName: 'hero',
      component: ArticleList,
      noDropdown: true
    },{
      path: 'roleform',
      name: '创建职业',
      routerName: 'RoleForm',
      hidden: true,
      component: RoleForm  
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]