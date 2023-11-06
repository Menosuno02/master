<template>
  <div>
    <h1>Empleados {{ $route.params.oficio }}</h1>
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
import ServiceEmpleados from "../services/ServiceEmpleados";
const servicio = new ServiceEmpleados();

export default {
  name: "EmpleadosOficio",
  watch: {
    "$route.params.oficio"(nextValue, oldValue) {
      if (nextValue !== oldValue) this.loadEmpleados();
    },
  },
  data() {
    return {
      empleados: [],
    };
  },
  methods: {
    loadEmpleados() {
      servicio.getEmpleadosOficio(this.$route.params.oficio).then((result) => {
        this.empleados = result;
      });
    },
  },
  mounted() {
    this.loadEmpleados();
  },
};
</script>
