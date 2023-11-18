<template>
  <form @submit.prevent="autenticacion()">
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
</template>

<script>
import Global from "@/Global";
import ServiceAuth from "@/services/ServiceAuth";
const service = new ServiceAuth();

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      contraseña: "",
    };
  },
  methods: {
    autenticacion() {
      service.iniciarSesion(this.username, this.contraseña).then((result) => {
        Global.token = result;
        this.$router.push("/home");
      });
    },
  },
};
</script>
