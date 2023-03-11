import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      component: () => import("@/pages/Game.vue"),
    },
  ],
});

export default router;
