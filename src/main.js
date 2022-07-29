import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/sass/app.scss" 

const app = createApp(App)
const assets = path => `src/assets/${path}`

app.config.globalProperties.$assets = assets
app.use(router)
app.mount('#app')