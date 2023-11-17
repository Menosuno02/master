<template>
  <div>
    <h1>Página principal</h1>
    <hr class="border border-danger opacity-100" />
    <form v-if="empleados.length == 0" @submit.prevent="autenticacion()">
      <div class="mt-3">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="mt-3">
        <label class="form-label">Contaseña</label>
        <input type="text" class="form-control" v-model="contraseña" />
      </div>
      <button class="btn btn-primary w-100 mt-3">Iniciar sesión</button>
    </form>
    <table class="table" v-else>
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
import ServiceAuth from "../services/ServiceAuth";
const service = new ServiceAuth();

export default {
  name: "HomeComponent",
  data() {
    return {
      username: "",
      contraseña: "",
      token: "",
      empleados: [],
    };
  },
  methods: {
    autenticacion() {
      service.iniciarSesion(this.username, this.contraseña).then((result) => {
        this.token = result;
        service.getEmple().then((result) => {
          this.empleados = result;
        });
      });
    },
  },
};
</script>
