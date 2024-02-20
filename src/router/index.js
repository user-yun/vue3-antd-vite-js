import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent, defineAsyncComponent } from 'vue'
const RouteView = {
  name: 'RouteView',
  render: () => h(resolveComponent('router-view'))
}
const layout = defineAsyncComponent(() => import('@l'))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/aaa/home',
      component: layout,
      children: [
        {
          path: '/aaa/home',
          redirect: '/aaa/aaa/home',
          component: RouteView,
          children: [
            {
              path: '/aaa/aaa/home',
              name: 'aaaaaahome',
              component: () => import('@v/HomeView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@v/AboutView')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@v/HomeView')
    }
  ]
})

export default router
