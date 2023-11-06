<template>
  <div>
    <h1>API Coches</h1>
    <hr class="border border-primary opacity-100" />
    <div v-for="coche in coches" :key="coche" class="mt-3">
      <h2>{{ coche.marca }} {{ coche.modelo }}</h2>
      <h3>{{ coche.conductor }}</h3>
      <img :src="coche.imagen" width="200" height="150" />
    </div>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoches";
const servicio = new ServiceCoches();

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    // una promesa no es un método, es un objeto
    servicio.getCoches().then((result) => {
      this.coches = result;
    });
    servicio.getMetodoParametros("dato").then((result) => {
      console.log(result);
    });
  },
};
</script>
