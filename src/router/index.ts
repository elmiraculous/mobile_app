import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/apps/views/HomePage/HomePage.vue';
import LoginPage from '@/apps/views/LoginPage/LoginPage.vue';
import StatisticsPage from '@/apps/views/StatisticsPage/StatisticsPage.vue';
import QRCodePage from '@/apps/views/QRCodePage/QRCodePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage 
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: StatisticsPage
  },
  {
    path: '/scan',
    name: 'Scan',
    component: QRCodePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
