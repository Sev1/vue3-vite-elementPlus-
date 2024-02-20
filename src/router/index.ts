import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/home/index.vue";

/**
 * 静态路由
 */
const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/suggestion",
    name: "suggestion",
    component: () => import("../views/suggestion/index.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/help/index.vue"),
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
