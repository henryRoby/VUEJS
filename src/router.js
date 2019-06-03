

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import contact from '@/components/contact'
import services from '@/components/services'


Vue.use(Router)
export default new Router({
  mode:'history', 
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/blog',
      name: 'blog',
      component: blog
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
    },

    {
      path: '/services',
      name: 'services',
      component: services
    }
  ]
})

