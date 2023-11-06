<template>
  <div>
    <h1>Empleados Detalles</h1>
    <hr class="border border-primary opacity-100" />
    <form @submit.prevent="buscarEmpleado()">
      <label class="form-label">Select</label>
      <select class="form-select" v-model="selectEmpleado">
        <option
          v-for="emple in empleados"
          :key="emple"
          :value="emple.idEmpleado"
        >
          {{ emple.apellido }}
        </option>
      </select>
      <button class="btn btn-primary w-100 mt-3">Detalles</button>
    </form>
    <div v-if="empleado" class="card mt-3">
      <h2 class="card-title">{{ empleado.apellido }}</h2>
      <dl>
        <dt>Oficio</dt>
        <dd>{{ empleado.oficio }}</dd>
        <dt>Salario</dt>
        <dd>{{ empleado.salario }}</dd>
        <dt>Departamento</dt>
        <dd>{{ empleado.departamento }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Global from "../Global";
import axios from "axios";

export default {
  name: "EmpleadosDetalle",
  data() {
    return {
      empleados: [],
      empleado: null,
      selectEmpleado: 0,
    };
  },
  methods: {
    buscarEmpleado() {
      let url = Global.urlApiEmpleados;
      let request = "api/Empleados/" + this.selectEmpleado;
      axios.get(url + request).then((response) => {
        this.empleado = response.data;
      });
    },
  },
  mounted() {
    let url = Global.urlApiEmpleados;
    let request = "api/Empleados";
    axios.get(url + request).then((response) => {
      this.empleados = response.data;
    });
  },
};
</script>
