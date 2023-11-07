<template>
  <div>
    <h1>Coches</h1>
    <hr class="border border-primary opacity-100" />
    <table class="table" v-if="coches.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche">
          <td>{{ coche.idCoche }}</td>
          <td>{{ coche.marca }}</td>
          <td>{{ coche.modelo }}</td>
          <td>
            <router-link
              class="btn btn-success btn-sm me-1"
              :to="'/details/' + coche.idCoche"
            >
              Detalles
            </router-link>
            <router-link
              class="btn btn-primary btn-sm me-1"
              :to="'/update/' + coche.idCoche"
            >
              Modificar
            </router-link>
            <router-link
              class="btn btn-danger btn-sm"
              :to="'/delete/' + coche.idCoche"
            >
              Eliminar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
    });
  },
};
</script>
