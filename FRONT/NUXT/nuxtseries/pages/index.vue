<template>
  <div>
    <h1>Página principal</h1>
    <hr class="border border-success opacity-100" />
    <div class="container text-center mt-3" v-if="series">
      <div class="row">
        <div
          class="card col-4 mb-3"
          v-for="serie in series"
          :key="serie"
          v-if="series"
        >
          <NuxtImg class="card-img-top" :src="serie.imagen" height="250" />
          <div class="card-body">
            <h5 class="card-title">{{ serie.nombre }} ({{ serie.anyo }})</h5>
            <p class="card-text">Puntuación: {{ serie.puntuacion }}</p>
            <NuxtLink
              class="btn btn-success w-100 btn-sm"
              :to="'/personajes/' + serie.idSerie"
            >
              Personajes
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Global from "../Global";
const { data: series } = await useFetch(Global.urlApi + "api/Series");
</script>

<script>
/*
import { ref, onBeforeMount, inject } from "vue";
import { useRoute } from "vue-router";
import env from "@/enviroment.js";
import { UilSchedule, UilStar, UilArrowLeft } from "@iconscout/vue-unicons";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  components: { UilSchedule, UilStar, UilArrowLeft, VueperSlides, VueperSlide },

  setup() {
    const serie = ref({});
    const route = useRoute();
    const generos = ref([]);
    const rating = ref("");
    const anyos = ref("");
    const actores = ref([]);
    const { checkFavs } = inject("favorites");
    const clickFavorites = () => {
      checkFavs(serie.value);
    };
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${env.apikey}&language=es-ES`
      )
        .then((response) => response.json())
        .then((data) => {
          serie.value = data;
          generos.value = serie.value.genres;
          rating.value = serie.value.vote_average.toFixed(1);
          if (
            serie.value.first_air_date.slice(0, 4) ==
            serie.value.last_air_date.slice(0, 4)
          )
            anyos.value = serie.value.first_air_date.slice(0, 4);
          else
            anyos.value =
              serie.value.first_air_date.slice(0, 4) +
              " - " +
              serie.value.last_air_date.slice(0, 4);
        });
      fetch(
        `https://api.themoviedb.org/3/tv/${route.params.id}/credits?api_key=${env.apikey}&language=es-ES`
      )
        .then((response) => response.json())
        .then((data) => {
          actores.value = data.cast;
        });
    });
    return { serie, route, generos, rating, anyos, actores, clickFavorites };
  },
};
*/
</script>
