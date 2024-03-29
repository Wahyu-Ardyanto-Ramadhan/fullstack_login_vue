import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:() => import('../views/register.vue')
  }
]

const router = createRouter({
  history: createRouter(),
  routes
})

export default router
