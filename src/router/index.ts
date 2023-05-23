import { ComponentOptions } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
  // RouteLocationNormalized,
  // NavigationGuardNext
} from 'vue-router'
// import { useAppStore } from '@/stores/app'

// interface IRouteRedirect {
//   name: string
// }

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: (): IRouteRedirect => ({ name: 'BuyInsurance' }),
    // meta: {
    //   auth: true
    // }
    component: (): ComponentOptions => import('@/views/Home.vue'),
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((
//   to: RouteLocationNormalized,
//   from: RouteLocationNormalized,
//   next: NavigationGuardNext
// ): void => {
//   const appStore = useAppStore()
//   if (to.name === 'Thankyou' && !appStore.isPaidValue) next({ name: 'BuyInsurance' })
//   else next()
// })

export default router
