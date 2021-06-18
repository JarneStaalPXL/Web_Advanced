import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../views/home/HomePage";

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
