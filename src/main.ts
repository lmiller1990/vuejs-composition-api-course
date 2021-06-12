import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { today, thisWeek, thisMonth, Post } from './mocks'
import { router } from './router'
import 'highlight.js/styles/atom-one-dark.css'

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


const app = createApp(App)
// ...
app.use(router)

app.mount('#app')
