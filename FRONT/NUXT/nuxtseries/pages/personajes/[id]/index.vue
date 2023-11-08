<template>
  <div>
    <h1>Personajes</h1>
    <hr class="border border-success opacity-100" />
    <table class="table" v-if="personajes">
      <thead class="border-success">
        <tr>
          <th>Personaje</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in personajes">
          <td>{{ person.nombre }}</td>
          <td>
            <NuxtImg :src="person.imagen" height="200" />
          </td>
        </tr>
      </tbody>
    </table>
    <NuxtImg v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script setup>
import Global from "@/Global";
let route = useRoute();
const { data: personajes } = await useFetch(
  Global.urlApi + "api/Series/PersonajesSerie/" + route.params.id
);
</script>
