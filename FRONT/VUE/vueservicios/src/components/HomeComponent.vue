<template>
  <div>
    <h1>Página principal</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "../services/ServiceEjemplo";
const servicio = new ServiceEjemplo();

export default {
  name: "HomeComponent",
  data() {
    return {
      mensaje: "",
    };
  },
  mounted() {
    this.mensaje = servicio.getSaludo("Alejandro");
  },
};
</script>
