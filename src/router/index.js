import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent } from 'vue'
import layout from '@l'
const RouteView = {
  name: 'RouteView',
  render: () => h(resolveComponent('router-view'))
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aaa',
      name: 'aaa',
      component: layout,
      children: [
        {
          path: '/aaa/home',
          name: 'aaahome',
          component: RouteView,
          children: [
            {
              path: '/aaa/aaa/about',
              name: 'aaaaaahome',
              component: () => import('@v/AboutView.vue')
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
