<template>
  <nav class="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/coches">Coches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleados">
              Empleados
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Oficios
            </a>
            <ul class="dropdown-menu">
              <li v-for="oficio in oficios" :key="oficio">
                <router-link class="dropdown-item" :to="'/oficio/' + oficio">
                  {{ oficio }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Global from "../Global";
import axios from "axios";

export default {
  name: "MenuComponent",
  data() {
    return {
      oficios: [],
    };
  },
  mounted() {
    let url = Global.urlApiEmpleados;
    let request = "api/Empleados/oficios";
    axios.get(url + request).then((response) => {
      this.oficios = response.data;
    });
  },
};
</script>
