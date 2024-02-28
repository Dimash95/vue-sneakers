import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Favorites from './pages/Favorites.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
