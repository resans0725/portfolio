import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Skills from "../views/Skills.vue";
import Gallery from "../views/Gallery.vue";
import Links from "../views/Links.vue";

const routes = [
  {
    path: "/",
    name: "profile",
    component: Profile,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills,
  },
  {
    path: "/links",
    name: "links",
    component: Links,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
