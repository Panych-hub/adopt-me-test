import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/convert',
          name: 'convert',
          component: () => import('@/views/ConvertView.vue'),
        },
      ],
    },
  ],
})

export default router
