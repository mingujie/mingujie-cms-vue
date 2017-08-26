import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Article from '@/views/Article'
import ArticleList from '@/views/ArticleList'
import ArticleForm from '@/views/ArticleForm'
import SkinForm from '@/views/SkinForm'
import PhotoForm from '@/views/PhotoForm'
import VideoForm from '@/views/VideoForm'
import GameForm from '@/views/GameForm'
import RoleForm from '@/views/RoleForm'
import HeroForm from '@/views/HeroForm'
import PictureManager from '@/views/PictureManager'
import BasicConfig from '@/views/system/BasicConfig'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'
import Pvp from '@/views/content/pvp/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'article',
          name: 'Article',
          component: Article
        },
        { 
          path: '/picture',
          name: 'PictureManager',
          component: PictureManager
        }
      ]
    },
    {
      path: '/system',
      name: 'System',
      component: Full,
      children: [
        {
          path: '/system/basic-config',
          name: 'BasicConfig',
          component: BasicConfig
        }
      ]
    },
    {
      path: '/content',
      name: 'Content',
      component: Full,
      children: [
        {
          path: 'articlelist',
          name: 'ArticleList',
          component: ArticleList,    
        },
        {
          path: 'articleform',
          name: 'ArticleForm',
          component: ArticleForm
        },
        {
          path: 'articleform/:aid',
          name: 'modifyArticle',
          component: ArticleForm
        },
        {
          path: 'skinlist',
          name: 'ArticleList',
          component: ArticleList,    
        },
        {
          path: 'skinform',
          name: 'SkinForm',
          component: SkinForm
        },
        {
          path: 'skinform/:sid',
          name: 'SkinForm',
          component: SkinForm
        },
        {
          path: '/content/videoform',
          name: 'VideoForm',
          component: VideoForm
        },
        {
          path: '/content/photoform',
          name: 'PhotoForm',
          component: PhotoForm
        },
        {
          path: '/content/gameform',
          name: 'GameForm',
          component: GameForm
        },
        {
          path: '/content/roleform',
          name: 'RoleForm',
          component: RoleForm
        },
        {
          path: '/content/heroform',
          name: 'HeroForm',
          component: HeroForm
        }]
    },{
      path: '/logout',
      name: 'Login',
      component: Login,      
    },{
      path: '/register',
      name: 'Register',
      component: Register,      
    },{
      path: '/pvp',
      name: 'PVP',
      component: Pvp
    }

  ]
})
