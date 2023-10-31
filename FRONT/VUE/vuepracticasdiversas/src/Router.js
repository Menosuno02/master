import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import { createWebHistory, createRouter } from "vue-router";

const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/collatz", component: CollatzComponent
    }
]

const router = createRouter({ history: createWebHistory(), routes: Rutas })

export default router;