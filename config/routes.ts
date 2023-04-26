export default [
  {
    path: '/login',
    wrappers: ['@/wrappers/auth'],
    component: '@/pages/login/index',
  },
  {
    path: '/hooks',
    component: '@/layouts/base-layout/index',
    routes: [
      {
        path: '/hooks',
        component: '@/layouts/aside-layout/index',
        routes: [
          { path: '/hooks/useContext', component: '@/pages/useContext/index' },
          { path: '/hooks/useMemo', component: '@/pages/useMemo/index' },
          { path: '/hooks/memo', component: '@/pages/memo/index' },
          {
            path: '/hooks/useCallback',
            component: '@/pages/useCallback/index',
          },
          { path: '/hooks/useRef', component: '@/pages/useRef/index' },
          { path: '/hooks/login/:id', component: '@/pages/login/index' },
        ],
      },
    ],
  },
  { path: '/', redirect: '/hooks' },
  { path: '/404', component: '@/pages/404' },
  { component: '@/pages/404' },
];
