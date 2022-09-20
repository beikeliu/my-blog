import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: { path: "/login" },
    },
    {
      path: "/post-list",
      component: () => import("@/views/PostList.vue"),
    },
    {
      path: "/create-post",
      component: () => import("@/views/CreatePost.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
  ],
});

export default router;
