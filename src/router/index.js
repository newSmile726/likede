import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'
import workorder from './modules/workorder'
import point from './modules/point'
import device from './modules/device'
import personnel from './modules/personnel'
import commodity from './modules/commodity'
import policy from './modules/policy'
import order from './modules/order'
import reconciliation from './modules/reconciliation'
Vue.use(Router)


// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '帝可得', icon: 'dikede' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
//动态路由
const asyncRouters = [
  workorder,
  point,
  device,
  personnel,
  commodity,
  policy,
  order,
  reconciliation
]
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRouters]
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
