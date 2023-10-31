import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

let app = createApp(App);

app.config.globalProperties.$filters = {
    evaluarNum(numero) {
        if (numero % 2 == 0)
            return "<span style='color: green'>" + numero + "</span>"
        else
            return "<span style='color: red'>" + numero + "</span>";
    }
}

app.use(router)
    .mount("#app");
