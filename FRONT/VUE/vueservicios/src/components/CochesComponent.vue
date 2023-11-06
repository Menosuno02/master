<template>
  <div>
    <h1>API Coches</h1>
    <hr class="border border-primary opacity-100" />
    <div v-for="coche in coches" :key="coche">
      <h2>{{ coche.marca }} {{ coche.modelo }}</h2>
      <h3>{{ coche.conductor }}</h3>
      <img :src="coche.imagen" width="200" height="150" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    let url = Global.urlApiCoches;
    let request = "webresources/coches";
    axios.get(url + request).then((response) => {
      this.coches = response.data;
    });
  },
};
</script>
