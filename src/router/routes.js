const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'typography',
        name: 'TypogrphyPage',
        component: () => import('pages/Typography.vue'),
      },
      { path: 'flex', name: 'FlexPage', component: () => import('pages/Flex.vue') },
      { path: 'dialogs', name: 'DialogsPage', component: () => import('pages/Dialogs.vue') },
      { path: 'forms', name: 'FormsPage', component: () => import('pages/Forms.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
