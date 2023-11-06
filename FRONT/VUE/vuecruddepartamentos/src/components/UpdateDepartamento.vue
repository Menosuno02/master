<template>
  <div>
    <h1>Modificar Departamento {{ this.$route.params.id }}</h1>
    <hr class="border border-primary opacity-100" />
    <form
      @submit.prevent="updateDepartamento()"
      v-if="departamento"
      class="w-75 mx-auto"
    >
      <div class="mt-3">
        <label class="form-label">ID</label>
        <input
          type="text"
          class="form-control"
          v-model="departamento.idDepartamento"
          disabled
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
      <button class="btn btn-primary w-100 mt-3">Modificar</button>
    </form>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceDept from "../services/ServiceDept";
const service = new ServiceDept();

export default {
  name: "UpdateDepartamento",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.findDepartamento();
    },
  },
  data() {
    return {
      departamento: null,
    };
  },
  methods: {
    findDepartamento() {
      let dept = this.$route.params.id;
      service.searchDepartamento(dept).then((result) => {
        this.departamento = result;
      });
    },
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    this.findDepartamento();
  },
};
</script>
