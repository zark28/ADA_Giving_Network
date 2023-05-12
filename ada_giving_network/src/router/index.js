import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingPage.vue'
import SignUp from '../views/SignUpPage.vue'
import SignIn from '../views/SignInPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})

export default router
