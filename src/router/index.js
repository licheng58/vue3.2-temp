import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import ArticleCreaterRouter from './modules/ArticleCreate'
import ArticleRouter from './modules/Article'
import PermissionListRouter from './modules/PermissionList'
import RoleListRouter from './modules/roleList.js'
import UserManageRouter from './modules/UserManage'
import store from '@/store'

export const privateRoutes = [
  RoleListRouter,
  UserManageRouter,
  PermissionListRouter,
  ArticleCreaterRouter,
  ArticleRouter,
]

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user',
        },
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/chart/index.vue'),
        meta: {
          title: 'chart',
          icon: 'el-icon-user',
        },
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue'),
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue'),
      },
    ],
  },
]

/**
 * 初始化路由表
 */
export function resetRouter() {
  if (store.getters.userInfo && store.getters.userInfo.permission && store.getters.userInfo.permission.menus) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}

const router = createRouter({
  // history: process.env.NODE_ENV === 'production' ? createWebHistory() : createWebHashHistory(),
  history: createWebHashHistory(),
  routes: publicRoutes,
})

export default router
