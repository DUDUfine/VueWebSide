import Vue from 'vue'
import Router from 'vue-router'
import HomeNavigation from '@/components/HomeNavigation'
import WebWrapper from '@/components/WebWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebWrapper',
      component: WebWrapper
    },
    {
      path: '/',
      name: 'HomeNavigation',
      component: HomeNavigation
    }

  ]
})
