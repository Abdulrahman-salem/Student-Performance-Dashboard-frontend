import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AveragesView from '../views/AveragesView.vue'
import StudentView from '@/views/StudentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/student/:id',
      name: 'student',
      component: StudentView,
      props: true,
    },
    {
      path: '/averages',
      name: 'averages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AveragesView,

      // component: () => import('../views/AveragesView.vue'),
    },
  ],
})

export default router
