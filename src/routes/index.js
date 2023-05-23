import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue'
import AboutUs from '../pages/about/aboutUs.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/aboutUs',
      component: AboutUs,
    },
  ],
})

export default router
