<template>
  <nav class="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <span class="navbar-brand fw-bold">CRUD Series</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">
              Crear personaje
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/update">
              Modificar personaje
            </router-link>
          </li>
          <li class="nav-item dropdown" v-if="series.length > 0">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Series
            </a>
            <ul class="dropdown-menu">
              <li v-for="serie in series" :key="serie">
                <router-link
                  class="dropdown-item"
                  :to="'/serie/' + serie.idSerie"
                >
                  {{ serie.nombre }}
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
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "MenuComponent",
  data() {
    return {
      series: [],
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
};
</script>
