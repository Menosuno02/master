<template>
  <div>
    <h1>Personajes Serie {{ this.$route.params.id }}</h1>
    <hr class="border border-primary opacity-100" />
    <div v-if="personajes.length > 0">
      <router-link
        class="btn btn-danger w-100"
        :to="'/serie/' + this.$route.params.id"
      >
        Volver
      </router-link>
      <table class="table mt-3">
        <thead class="border-primary">
          <tr>
            <th>Personaje</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in personajes" :key="person">
            <td>{{ person.nombre }}</td>
            <td>
              <img :src="person.imagen" width="150" height="200" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "PersonajesSerie",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.loadPersonajesSerie();
    },
  },
  data() {
    return {
      personajes: [],
    };
  },
  methods: {
    loadPersonajesSerie() {
      this.personajes = [];
      let serie = this.$route.params.id;
      service.loadPersonajesSerie(serie).then((result) => {
        this.personajes = result;
      });
    },
  },
  mounted() {
    this.loadPersonajesSerie();
  },
};
</script>
