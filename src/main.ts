

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './utils/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)

i18n(app)

app.mount('#app')
