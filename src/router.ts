import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from './components/Home.vue'
import NewPost from './components/NewPost.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/posts/new',
      component: NewPost
    }
  ]
})