import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Auth',
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/homepage',
    component: () => import('layouts/MainHomepage.vue'),
    children: [
      {
        name: 'Homepage',
        path: '',
        component: () => import('pages/Homepage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    name: '404',
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
