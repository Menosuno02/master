import { createWebHistory, createRouter } from "vue-router";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue"
import CochesComponent from "./components/CochesComponent.vue"
import EmpleadosOficio from "./components/EmpleadosOficio.vue"
import HomeComponent from "./components/HomeComponent.vue"

const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/coches", component: CochesComponent
    },
    {
        path: "/empleados", component: EmpleadosDetalle
    },
    {
        path: "/oficio/:oficio?", component: EmpleadosOficio
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas
});

export default router;