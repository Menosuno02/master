<template>
  <div>
    <h1>Empleados Detalles</h1>
    <hr class="border border-primary opacity-100" />
    <div class="row">
      <form class="col-6" @submit.prevent="buscarEmpleado()">
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
      <div v-if="empleado" class="card mt-3 col-6">
        <div class="card-body">
          <h3 class="card-title fw-bold">{{ empleado.apellido }}</h3>
          <dl class="mb-0">
            <dt>Oficio</dt>
            <dd>{{ empleado.oficio }}</dd>
            <dt>Salario</dt>
            <dd>{{ empleado.salario }}</dd>
            <dt>Departamento</dt>
            <dd>{{ empleado.departamento }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const servicio = new ServiceEmpleados();

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
      servicio.findEmpleado(this.selectEmpleado).then((result) => {
        this.empleado = result;
      });
    },
  },
  mounted() {
    servicio.getEmpleados().then((result) => {
      this.empleados = result;
    });
  },
};
</script>
