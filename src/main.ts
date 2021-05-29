import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { today, thisWeek, thisMonth, Post } from './mocks'

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


createApp(App).mount('#app')
