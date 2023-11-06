<template>
  <div>
    <h1>Empleados Oficio</h1>
    <hr class="border border-primary opacity-100" />
    <table class="table" v-if="empleados.length > 0">
      <thead class="border-primary">
        <tr>
          <th>Apellido</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emple in empleados" :key="emple">
          <td>{{ emple.apellido }}</td>
          <td>{{ emple.salario }}</td>
          <td>{{ emple.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Global from "../Global";
import axios from "axios";

export default {
  name: "EmpleadosOficio",
  watch: {
    "$route.params.oficio"(nextValue, oldValue) {
      if (nextValue !== oldValue) {
        this.searchEmpleados();
      }
    },
  },
  data() {
    return {
      empleados: [],
    };
  },
  methods: {
    searchEmpleados() {
      let oficio = this.$route.params.oficio;
      let url = Global.urlApiEmpleados;
      let request = "api/Empleados/EmpleadosOficio/" + oficio;
      axios.get(url + request).then((response) => {
        this.empleados = response.data;
      });
      console.log(this.empleados);
    },
  },
  mounted() {
    this.searchEmpleados();
  },
};
</script>
