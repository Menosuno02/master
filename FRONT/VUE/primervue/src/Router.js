import CineComponent from './components/CineComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import HolaMundoComponent from "./components/HolaMundo.vue"

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
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes: Rutas
    }
);

export default router;