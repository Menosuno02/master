<template>
  <div>
    <h1>Crear Coche</h1>
    <hr class="border border-primary opacity-100" />
    <form @submit.prevent="createCoche()">
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
      <button class="mt-3 w-100 btn btn-primary">Crear coche</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "CreateCoche",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    createCoche() {
      service.createCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>
