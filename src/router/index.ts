// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Example1 from '@/views/PageExample1.vue'
import Example2 from '@/views/PageExample2.vue'
import Example3 from '@/views/PageExample3.vue'
import Example4 from '@/views/PageExample4.vue'

const routes = [
  { path: '/example1', name: 'example1', component: Example1 },
  { path: '/example2', name: 'example2', component: Example2 },
  { path: '/example3', name: 'example3', component: Example3 },
  { path: '/example4', name: 'example4', component: Example4 },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
