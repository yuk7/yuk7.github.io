import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repos from '../views/Repos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/repos',
    name: 'repos',
    component: Repos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
