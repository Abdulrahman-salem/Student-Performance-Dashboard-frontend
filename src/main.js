import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import store from './stores'
import VueAwesomePaginate from 'vue-awesome-paginate'

createApp(App).use(router).use(store).use(VueAwesomePaginate).mount('#app')
// const app = createApp(App)

// // app.use(createPinia())
// app.use(router)
// app.use(store)

// app.mount('#app')
