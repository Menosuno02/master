<template>
  <div>
    <h1>Modificar Coche {{ this.$route.params.id }}</h1>
    <hr class="border border-primary opacity-100" />
    <form v-if="coche" @submit.prevent="updateCoche()">
      <div class="mt-3">
        <label class="form-label">ID</label>
        <input
          type="number"
          class="form-control"
          v-model="coche.idCoche"
          disabled
        />
      </div>
      <div class="mt-3">
        <label class="form-label">Marca</label>
        <input type="text" class="form-control" v-model="coche.marca" />
      </div>
      <div class="mt-3">
        <label class="form-label">Modelo</label>
        <input type="text" class="form-control" v-model="coche.modelo" />
      </div>
      <div class="mt-3">
        <label class="form-label">Conductor</label>
        <input type="text" class="form-control" v-model="coche.conductor" />
      </div>
      <div class="mt-3">
        <label class="form-label">Imagen</label>
        <input type="text" class="form-control" v-model="coche.imagen" />
      </div>
      <button class="btn btn-primary mt-3 w-100">Modificar coche</button>
    </form>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "ModificarCoche",
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
    updateCoche() {
      service.updateCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    this.searchCoche();
  },
};
</script>
