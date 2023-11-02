import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicarComponent from "./components/TablaMultiplicar.vue";

import { createWebHistory, createRouter } from "vue-router";

const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/collatz", component: CollatzComponent
    },
    {
        path: "/multiplicar", component: TablaMultiplicarComponent
    }
];

const router = createRouter({
    history: createWebHistory(), routes: Rutas
});

export default router;