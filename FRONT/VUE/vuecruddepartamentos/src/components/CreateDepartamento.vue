<template>
  <div>
    <h1>Crear departamento</h1>
    <hr class="border border-primary opacity-100" />
    <form @submit.prevent="insertDepartamento()" class="w-75 mx-auto">
      <div class="mt-3">
        <label class="form-label">ID</label>
        <input
          type="number"
          class="form-control"
          v-model="departamento.idDepartamento"
        />
      </div>
      <div class="mt-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="departamento.nombre" />
      </div>
      <div class="mt-3">
        <label class="form-label">Localidad</label>
        <input
          type="text"
          class="form-control"
          v-model="departamento.localidad"
        />
      </div>
      <button class="btn btn-primary mt-3 w-100">Crear</button>
    </form>
  </div>
</template>

<script>
import ServiceDept from "../services/ServiceDept";
const service = new ServiceDept();

export default {
  name: "CreateDepartamento",
  data() {
    return {
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
  methods: {
    insertDepartamento() {
      service.createDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>
