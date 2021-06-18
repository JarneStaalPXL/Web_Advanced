import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Oefeningen from "../views/Oefeningen.vue";
import Oefening1 from "../components/Oefening1";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/oefeningen',
    name: 'Oefeningen',
    component: Oefeningen
  },
  {
    path: '/oefening1',
    name: 'Oefeningen1',
    component: Oefening1
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
