import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['../components/Login.vue'], resolve)
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      requireAuth: true // 判断是否需要登录
    },
    component: resolve => require(['../views/Cart.vue'], resolve)
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      requireAuth: true // 判断是否需要登录
    },
    component: resolve => require(['../views/Mine.vue'], resolve)
    // component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sort.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
