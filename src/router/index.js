import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Article from '@/views/Article'
import ArticleForm from '@/views/ArticleForm'
import SkinForm from '@/views/SkinForm'
import PhotoForm from '@/views/PhotoForm'
import VideoForm from '@/views/VideoForm'
import GameForm from '@/views/GameForm'
import RoleForm from '@/views/RoleForm'
import HeroForm from '@/views/HeroForm'

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
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'article',
          name: 'Article',
          component: Article
        }
      ]
    },
    {
      path: '/content',
      name: 'Content',
      component: Full,
      children: [
        {
          path: '/content/articleform',
          name: 'ArticleForm',
          component: ArticleForm
        },
        {
          path: '/content/skinform',
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
    }
  ]
})
