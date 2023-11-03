import PadreDeportes from "./PadreDeporte.vue"
import PadreNumeros from "./PadreNumeros.vue"
import HomeComponent from "./HomeComponent.vue"
import ComicsComponent from "./ComicsComponent.vue"
import SeleccionMultiple from "./SeleccionMultiple.vue"
import SumaCheckbox from "./SumaCheckbox.vue"
import NumeroDoble from "./NumeroDoble.vue"
import TablaMultiplicarRouter from "./TablaMultiplicarRouter.vue"

import { createRouter, createWebHistory } from "vue-router";

const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/deportes", component: PadreDeportes
    },
    {
        path: "/numeros", component: PadreNumeros
    },
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/select", component: SeleccionMultiple
    },
    {
        path: "/checkbox", component: SumaCheckbox
    },
    {
        path: "/numdoble/:numero?", component: NumeroDoble
    },
    {
        path: "/tablamult/:numero", component: TablaMultiplicarRouter
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas
});

export default router;