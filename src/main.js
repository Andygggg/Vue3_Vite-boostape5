import './assets/main.css'
import './stores/axios.js'
import './assets/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 這行會載入 Bootstrap 的預設樣式，而將其載入順序放在
// 自定義的 all.scss（第 3 行與第 8 行）之下，才會覆蓋到自己客製的樣式～
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
