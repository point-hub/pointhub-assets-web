export const routes = {
  path: '/',
  component: () => import('@/layouts/app-layout.vue'),
  meta: {
    shortcut: 'main',
  },
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/logo.vue'),
          meta: {
            shortcut: 'main',
            menu: 'brand',
            submenu: 'logo',
          },
        },
        {
          path: 'icon',
          component: () => import('./views/icon.vue'),
          meta: {
            shortcut: 'main',
            menu: 'brand',
            submenu: 'icon',
          },
        },
        {
          path: 'colors',
          component: () => import('./views/colors.vue'),
          meta: {
            shortcut: 'main',
            menu: 'brand',
            submenu: 'colors',
          },
        },
        {
          path: 'typography',
          component: () => import('./views/typography.vue'),
          meta: {
            shortcut: 'main',
            menu: 'brand',
            submenu: 'typography',
          },
        },
      ],
    },
  ],
}
