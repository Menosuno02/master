<template>
  <div>
    <h1>Detalles Coche {{ this.$route.params.id }}</h1>
    <hr class="border border-primary opacity-100" />
    <div class="card w-75 mx-auto" v-if="coche">
      <img class="card-img-top" :src="coche.imagen" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ coche.marca }} {{ coche.modelo }}</h5>
        <p class="card-text">Conductor: {{ coche.conductor }}</p>
      </div>
    </div>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "DetallesCoche",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.searchCoche();
    },
  },
  data() {
    return {
      coche: null,
    };
  },
  methods: {
    searchCoche() {
      let coche = this.$route.params.id;
      service.searchCoche(coche).then((result) => {
        this.coche = result;
      });
    },
  },
  mounted() {
    this.searchCoche();
  },
};
</script>
