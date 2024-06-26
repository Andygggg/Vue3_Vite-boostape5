import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: () => import('../content/SignIn/index.vue'),
      children: [
        {
          path: 'UserLogin',
          name: 'UserLogin',
          component: () => import('../content/SignIn/UserLogin.vue'),
        },
      ],
      redirect: { name: 'UserLogin' },
    },
    //六角課程最終作業
    {
      path: '/DashBoard',
      name: 'HexSchoolFinal',
      component: () => import('../content/HexSchoolFinal/DashBoard.vue'),
      children: [
        {
          path: 'ProductList',
          name: 'ProductList',
          component: () => import('../content/HexSchoolFinal/ProductList.vue'),
          meta: {
            title: '產品',
          },
        },
        {
          path: 'OrderList',
          name: 'OrderList',
          component: () => import('../content/HexSchoolFinal/OrderList.vue'),
          meta: {
            title: '訂單',
          },
        },
        {
          path: 'DiscountList',
          name: 'DiscountList',
          component: () => import('../content/HexSchoolFinal/DiscountList.vue'),
          meta: {
            title: '優惠劵',
          },
        },
      ],
      redirect: { name: 'ProductList' },
    },
    //自己玩
    {
      path: '/Project',
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
            {
              path: 'modal',
              name: 'Modal',
              component: () => import('../content/Project/Form/Modal.vue'),
              meta: {
                title: '互動視窗',
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
      redirect: { name: 'Table' },
    },
  ],
})

export default router
