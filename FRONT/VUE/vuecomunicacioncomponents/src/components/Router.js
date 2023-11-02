import PadreDeporte from "./PadreDeporte.vue"
import PadreNumeros from "./PadreNumeros.vue"
import HomeComponent from "./HomeComponent.vue"
import ComicsComponent from "./ComicsComponent.vue"

import { createRouter, createWebHistory } from "vue-router";

const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/deportes", component: PadreDeporte
    },
    {
        path: "/numeros", component: PadreNumeros
    },
    {
        path: "/comics", component: ComicsComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas
});

export default router;