import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import SerieComponent from "./components/SerieComponent.vue"
import PersonajesSerie from "./components/PersonajesSerie.vue"
import CreatePersonaje from "./components/CreatePersonaje.vue"
import UpdatePersonaje from "./components/UpdatePersonaje.vue"

const Routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/serie/:id", component: SerieComponent
    },
    {
        path: "/personajes/:id", component: PersonajesSerie
    },
    {
        path: "/create", component: CreatePersonaje
    },
    {
        path: "/update", component: UpdatePersonaje
    }
];

const router = createRouter({
    history: createWebHistory(), routes: Routes
});

export default router;