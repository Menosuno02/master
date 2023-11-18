import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
const routes = [
  { path: "/", component: LoginComponent },
  { path: "/home", component: HomeComponent },
];

const router = createRouter({ history: createWebHistory(), routes: routes });
export default router;
