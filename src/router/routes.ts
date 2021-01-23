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
    path: '/home',
    component: () => import('layouts/MainHomepage.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('pages/Home/Index.vue'),
      },
    ],
  },
  {
    path: '/front',
    component: () => import('layouts/MainFront.vue'),
    children: [
      {
        name: 'Login',
        path: '/front/login',
        component: () => import('pages/FrontSide/SignUp.vue'),
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
