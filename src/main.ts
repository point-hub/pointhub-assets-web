import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mainApp from './main-app.vue'
import router from './router'
import FaIcon from '@/global-components/fa-icon.vue'
import './assets/css/main.css'

const pinia = createPinia()
const app = createApp(mainApp)

app.use(pinia)
app.use(router)

// register global component
app.component('FaIcon', FaIcon)

// mount vue application
app.mount('#app')
