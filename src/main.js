import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

// import { getCategory } from './apis/testAPI'
// getCategory().then((res) => {
//   console.log(res)
// })

import { lazyPlugin } from '@/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
