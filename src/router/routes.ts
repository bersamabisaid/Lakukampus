import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('pages/Home/Index.vue'),
      },
      {
        name: 'CartIndex',
        path: '/my-cart',
        component: () => import('pages/MyCart/Index.vue'),
      },
      {
        name: 'DetailProduct',
        path: '/my-cart/detail-product',
        component: () => import('pages/MyCart/DetailProduct/Index.vue'),
      },
    ],
  },
  {
    path: '/lakukampus',
    component: () => import('layouts/MainFront.vue'),
    children: [
      {
        name: 'SignUp',
        path: '/lakukampus/signup',
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
