import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue"
import DetallesCoche from "./components/DetallesCoche.vue"
import CreateCoche from "./components/CreateCoche.vue"
import ModificarCoche from "./components/ModificarCoche.vue"
import DeleteCoche from "./components/DeleteCoche.vue"

const Routes = [
    {
        path: "/", component: CochesComponent
    },
    {
        path: "/details/:id", component: DetallesCoche
    },
    {
        path: "/create", component: CreateCoche
    },
    {
        path: "/update/:id", component: ModificarCoche
    },
    {
        path: "/delete/:id", component: DeleteCoche
    }
]

const router = createRouter({
    history: createWebHistory(), routes: Routes
});

export default router;