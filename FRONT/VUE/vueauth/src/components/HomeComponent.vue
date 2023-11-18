<template>
  <div>
    <h1>Página principal</h1>
    <hr class="border border-danger opacity-100" />
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emple in empleados" :key="emple">
          <td>{{ emple.idEmpleado }}</td>
          <td>{{ emple.apellido }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceAuth from "../services/ServiceAuth";
const service = new ServiceAuth();

export default {
  name: "HomeComponent",
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    if (!Global.token) this.$router.push("/");
    service.getEmple().then((result) => {
      this.empleados = result;
    });
  },
};
</script>
