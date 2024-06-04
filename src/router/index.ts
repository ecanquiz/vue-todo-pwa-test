import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/edit/:id(\\d+)',      
      name: 'edit',
      component: () => import('../views/Edit.vue'),
      props: true
  }]
})

export default router
