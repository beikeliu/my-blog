import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/PostList.vue"),
    },
    {
      path: "/create-post",
      component: () => import("@/views/CreatePost.vue"),
    },
  ],
});

export default router;
