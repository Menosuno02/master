<template>
  <div class="w-75 mx-auto">
    <div class="card" v-if="serie">
      <img class="card-img-top" :src="serie.imagen" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ serie.nombre }}</h5>
        <p class="card-text">Puntuación IMDB: {{ serie.puntuacion }}</p>
        <router-link
          class="btn btn-success w-100"
          :to="'/personajes/' + serie.idSerie"
        >
          Personajes
        </router-link>
      </div>
    </div>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "SerieComponent",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.searchSerie();
    },
  },
  data() {
    return {
      serie: null,
    };
  },
  methods: {
    searchSerie() {
      this.serie = null;
      let serie = this.$route.params.id;
      service.searchSerie(serie).then((result) => {
        this.serie = result;
      });
    },
  },
  mounted() {
    this.searchSerie();
  },
};
</script>
