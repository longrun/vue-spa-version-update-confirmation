import { createRouter, createWebHistory } from 'vue-router'

import { checkVersion } from '../middlewares/versionChecker'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  checkVersion(next)
})

export default router
