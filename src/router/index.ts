import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import Example1 from '@/views/PageExample1.vue'
import Example2 from '@/views/PageExample2.vue'
import Example3 from '@/views/PageExample3.vue'
import Example4 from '@/views/PageExample4.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '', name: 'home', component: HomePage },
  { path: '/example1', name: 'example1', component: Example1 },
  { path: '/example2', name: 'example2', component: Example2 },
  { path: '/example3', name: 'example3', component: Example3 },
  { path: '/example4', name: 'example4', component: Example4 },
]

const route = ref<string>('')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { routes, route }
export default router
