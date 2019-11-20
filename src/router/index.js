import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fromCustomers',
    name: 'fromCustomers',
    component: () => import('../views/FromCustomers.vue')
  },
  {
    path: '/fromItems',
    name: 'fromItems',
    component: () => import('../views/FromItems.vue')
  },
  {
    path: '/items',
    name: 'items',
    component: () => import('../views/Items.vue')
  },
  {
    path: '/customers',
    name: 'customers',
    component: () => import('../views/Customers.vue')
  },
  {
    path: '/deliveryNotes',
    name: 'deliveryNotes',
    component: () => import('../views/DeliveryNotes.vue')
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
