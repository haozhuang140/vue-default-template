import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  routes: constantRoutes
})

export default router
