const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('pages/Home'),
            },
            {
                path: '/search',
                name: 'Search',
                component: () => import('pages/Search'),
            },
            {
                path: '/my-cart',
                name: 'MyCart',
                component: () => import('pages/MyCart'),
            },
        ],
    },

    {
        path: '/market',
        component: () => import('layouts/MarketLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/Market'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue'),
    },
];

export default routes;
