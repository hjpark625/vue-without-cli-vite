import { createWebHistory, createRouter } from 'vue-router';
import NotFound from '@/pages/NotFound.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('@/pages/MainHome.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
