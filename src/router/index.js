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
    component:() => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:() => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    //Authentication check
    const token = localStorage.getItem('token')

    if (token){
      // check if token is valid
      return next()
    }

    return next('/login')
  }

  next()
})

export default router
