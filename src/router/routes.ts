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
        name: 'MyCart',
        path: '/my-cart',
        component: () => import('pages/MyCart/Index.vue'),
      },
      {
        name: 'Search',
        path: '/search',
        component: () => import('pages/Search/Index.vue'),
      },
      {
        name: 'Category',
        path: '/category',
        component: () => import('pages/Category/Index.vue'),
      },
      {
        name: 'Recommended',
        path: '/recommended',
        component: () => import('pages/Recommended.vue'),
      },
      {
        name: 'Chat',
        path: '/chat/:id?',
        component: () => import('pages/Chat/Index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainFront.vue'),
    children: [
      {
        name: 'SignUp',
        path: '/signup',
        component: () => import('pages/FrontSide/SignUp.vue'),
      },
    ],
  },
  {
    path: '/:shopName',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Shop',
        path: '',
        component: () => import('pages/Shop/Index.vue'),
      },
      {
        name: 'Product',
        path: ':id/:prodName?',
        component: () => import('pages/Product/Index.vue'),
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
