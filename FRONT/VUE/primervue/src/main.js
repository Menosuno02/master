import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

let app = createApp(App);

app.config.globalProperties.$filters = {
    // métodos globales
    mayuscula(dato) {
        return dato.toString().toUpperCase();
    },

    getNumeroDoble(numero) {
        return numero * 2;
    }
}

app.use(router)
    .mount('#app');
