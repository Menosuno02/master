import { createWebHistory, createRouter } from "vue-router"
import DepartamentosComponent from "./components/DepartamentosComponent.vue"
import CreateDepartamento from "./components/CreateDepartamento.vue"
import DetallesDepartamento from "./components/DetallesDepartamento.vue"
import UpdateDepartamento from "./components/UpdateDepartamento.vue"
import DeleteDepartamento from "./components/DeleteDepartamento.vue"

const Rutas = [
    {
        path: "/", component: DepartamentosComponent
    },
    {
        path: "/create", component: CreateDepartamento
    },
    {
        path: "/departamento/:id/:nombre/:localidad", component: DetallesDepartamento
    },
    {
        path: "/update/:id", component: UpdateDepartamento
    },
    {
        path: "/delete/:id", component: DeleteDepartamento
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas
});

export default router;