import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Oefeningen from "../views/Oefeningen.vue";
import Oefening1 from "../components/Todo/Oefening1";
import ProfileComponent from "../components/Profile/ProfileComponent";
import ProfileInlnputComponent from "../components/Profile/ProfileInlnputComponent";

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
  },
  {
    path: '/profilepage',
    name: 'ProfileComp',
    component: ProfileComponent
  },
  {
    path: '/profileinput',
    name: 'ProfileInput',
    component: ProfileInlnputComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
