<template>
  <div>
    <h1>Modificar personaje</h1>
    <hr class="border border-primary opacity-100" />
    <form
      @submit.prevent="updatePersonaje()"
      v-if="personajes.length > 0 && series.length > 0"
      class="w-75 mx-auto"
    >
      <div class="mt-3">
        <label class="form-label">Serie</label>
        <select class="form-select" v-model="serie" @change="loadSerie()">
          <option v-for="serie in series" :key="serie" :value="serie.idSerie">
            {{ serie.nombre }}
          </option>
        </select>
      </div>
      <div class="mt-3">
        <label class="form-label">Personaje</label>
        <select
          class="form-select"
          v-model="personaje"
          @change="loadPersonaje()"
        >
          <option
            v-for="person in personajes"
            :key="person"
            :value="person.idPersonaje"
          >
            {{ person.nombre }}
          </option>
        </select>
      </div>
      <button class="btn btn-primary mt-3 w-100">Modificar personaje</button>
    </form>
    <img v-else src="../assets/images/loading.gif" />
    <div class="row mt-3">
      <div class="col-6" v-if="datosSerie">
        <h2>{{ datosSerie.nombre }}</h2>
        <img :src="datosSerie.imagen" class="w-100" />
      </div>
      <div class="col-6" v-if="datosPersonaje">
        <h2>{{ datosPersonaje.nombre }}</h2>
        <img :src="datosPersonaje.imagen" class="w-100" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "UpdatePersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      serie: null,
      personaje: null,
      datosSerie: null,
      datosPersonaje: null,
    };
  },
  methods: {
    updatePersonaje() {
      service.updatePersonaje(this.personaje, this.serie).then((result) => {
        console.log(result);
        this.$router.push("/personajes/" + this.serie);
      });
    },
    loadSerie() {
      service.searchSerie(this.serie).then((result) => {
        this.datosSerie = result;
      });
    },
    loadPersonaje() {
      service.searchPersonaje(this.personaje).then((result) => {
        this.datosPersonaje = result;
      });
    },
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
    service.getPersonajes().then((result) => {
      this.personajes = result;
    });
  },
};
</script>
