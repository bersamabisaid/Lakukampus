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
        component: () => import('pages/Recommended/Index.vue'),
      },
      {
        name: 'Chat',
        path: '/chat/:id?',
        component: () => import('pages/Chat/Index.vue'),
      },
      {
        path: '/settings',
        component: () => import('layouts/SettingsLayout.vue'),
        children: [
          {
            name: 'Settings',
            path: '',
            component: () => import('pages/Settings/General.vue'),
          },
          {
            name: 'SettingsUserProfile',
            path: 'bio',
            component: () => import('pages/Settings/Biodata.vue'),
          },
          {
            name: 'SettingsVerifyAccount',
            path: 'verify',
            component: () => import('pages/Settings/VerifyAccount.vue'),
          },
        ],
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
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('pages/Dashboard/Index.vue'),
      },
      {
        name: 'CreateShop',
        path: 'create-shop',
        component: () => import('pages/Dashboard/CreateShop.vue'),
      },
      {
        path: ':shopName',
        component: { render: (e) => e('router-view') },
        children: [
          {
            name: 'MyShop',
            path: '',
            component: () => import('pages/Dashboard/MyShop.vue'),
          },
          {
            name: 'MyProduct',
            path: 'products',
            component: () => import('pages/Dashboard/MyProduct.vue'),
          },
        ],
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
