import Vue from 'vue'
import Router from 'vue-router'
import StoreWrapper from '@/view/StoreWrapper'
import WebWrapper from '@/view/WebWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebWrapper',
      component: WebWrapper
    },
    {
      path: '/StoreWrapper',
      name: 'StoreWrapper',
      component: StoreWrapper
    }

  ]
})
