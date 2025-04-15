import { createRouter, createWebHistory } from 'vue-router'
import { ConvertView, HomeView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/convert',
          name: 'convert',
          component: ConvertView,
        },
      ],
    },
  ],
})

export default router
