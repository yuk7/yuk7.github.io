import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const ReposView = () => import("../views/ReposView.vue");
const LinksView = () => import("../views/FriendsLinkView.vue");
const NotFoundView = () => import("../views/_NotFoundView.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: HomeView,
    beforeEnter() {
      window.location.href = "https://yuk7.dev/blog/";
      return false;
    },
  },
  {
    path: "/repos/",
    alias: "/repos",
    name: "repos",
    component: ReposView,
  },
  {
    path: "/links/",
    alias: "/links",
    name: "links",
    component: LinksView,
  },
  {
    path: "/:catchAll(.*)",
    name: "nfp",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
