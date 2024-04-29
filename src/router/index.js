import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Project',
      component: () => import('../content/Project/index.vue'),
      children: [
        {
          path: 'form',
          name: 'Form',
          meta: {
            title: '表單',
            icon: 'bx bxs-file-html',
            isOnHeader: true,
          },
          children: [
            {
              path: 'table',
              name: 'Table',
              component: () => import('../content/Project/Form/Table.vue'),
              meta: {
                title: '表格',
                isOnSidebar: true,
              },
            },
          ],
        },
        {
          path: 'layout',
          name: 'Layout',
          meta: {
            title: '排版',
            icon: 'bx bxs-file-html',
            isOnHeader: true,
          },
          children: [
            {
              path: 'column',
              name: 'Column',
              component: () => import('../content/Project/Layout/Column.vue'),
              meta: {
                title: '欄',
                isOnSidebar: true,
              },
            },
          ],
        },
      ],
    },
  ],
})

export default router
