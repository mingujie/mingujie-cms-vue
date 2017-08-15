import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Article from '@/views/Article'
import ArticleForm from '@/views/ArticleForm'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
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
        },
        {
          path: '/articleform',
          name: 'ArticleForm',
          component: ArticleForm
        }
      ]
    }
  ]
})
