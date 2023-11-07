<template>
  <div>
    <h1>Crear personaje</h1>
    <hr class="border border-primary opacity-100" />
    <form
      @submit.prevent="createPersonaje()"
      class="w-75 mx-auto"
      v-if="series.length > 0"
    >
      <div class="mt-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="personaje.nombre" />
      </div>
      <div class="mt-3">
        <label class="form-label">Imagen</label>
        <input type="text" class="form-control" v-model="personaje.imagen" />
      </div>
      <div class="mt-3">
        <label class="form-label">Serie</label>
        <select class="form-select" v-model="personaje.idSerie">
          <option v-for="serie in series" :key="serie" :value="serie.idSerie">
            {{ serie.nombre }}
          </option>
        </select>
      </div>
      <button class="btn btn-primary w-100 mt-3">Crear personaje</button>
    </form>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "CreatePersonaje",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series: [],
    };
  },
  methods: {
    createPersonaje() {
      service.createPersonaje(this.personaje).then((result) => {
        console.log(result);
        this.$router.push("/personajes/" + this.personaje.idSerie);
      });
    },
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
};
</script>
