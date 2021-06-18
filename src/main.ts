import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { today, thisWeek, thisMonth, Post } from './mocks'
import { router } from './router'
import random from 'lodash/random'
import 'highlight.js/styles/atom-one-dark.css'
import { store, storeKey } from './store'

function delay() {
  return new Promise(res => {
    setTimeout(res, 2000)
  })
}

// @ts-ignore
axios.get = async (url: string) => {
  if (url === '/posts') {
    await delay()
    return Promise.resolve({
      data: [today, thisWeek, thisMonth]
    })
  }
}

// @ts-ignore
axios.post = async (url: string, post: Post) => {
  if (url === '/posts') {
    const id = random(100, 10000)
    await delay()
    return Promise.resolve({
      data: {...post, id}
    })
  }
}

const app = createApp(App)
// ...
app.use(router)
app.use(store)

app.mount('#app')
