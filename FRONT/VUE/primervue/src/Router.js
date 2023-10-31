import CineComponent from './components/CineComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import HolaMundoComponent from "./components/HolaMundo.vue"
import CicloVidaComponent from "./components/CicloVidaComponent.vue"
import DirectivasComponent from "./components/DirectivasComponent.vue"
import PropComputadasComponent from "./components/PropComputadas.vue"
import NumeroParImparComponent from "./components/NumeroParImpar.vue"
import MetodosFilterComponent from "./components/MetodosFilter.vue"

import { createRouter, createWebHistory } from 'vue-router';

const Rutas = [
    {
        path: "/", component: HomeComponent,
    },
    {
        path: "/holamundo", component: HolaMundoComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/ciclovida", component: CicloVidaComponent
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/computadas", component: PropComputadasComponent
    },
    {
        path: "/parimpar", component: NumeroParImparComponent
    },
    {
        path: "/filters", component: MetodosFilterComponent
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes: Rutas
    }
);

export default router;