import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutLarge from '@/layouts/LayoutLarge.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutLarge,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/produtos/adicionar',
          name: 'ProductAdd',
          component: () => import('@/views/ProductAdd.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
      ],
    },
  ],
});

export default router;