import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'

createApp(App)
    .use(router)
    .mount('#app')
