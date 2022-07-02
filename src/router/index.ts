import { createRouter, createWebHistory, routeLocationKey } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      props: route => ({
        query: route.query.q,
        category: route.query.cat
      })
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/AnimeDetailsView.vue'),
      props: route => {
        id: route.params.id
      }
    }
  ]
})

export default router;
