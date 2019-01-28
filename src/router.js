import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./views/ArrayMap.vue')
    },
    {
      path: '/reduce',
      name: 'reduce',
      component: () => import('./views/ArrayReduce.vue')
    },
  ]
})
