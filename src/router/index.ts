import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { trackRouter } from 'vue-gtag-next'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ReposView from '../views/ReposView.vue'
import LinksView from '../views/FriendsLinkView.vue'
import NotFoundView from '../views/_NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'nfp',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/repos',
    name: 'repos',
    component: ReposView
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

trackRouter(router)

export default router
