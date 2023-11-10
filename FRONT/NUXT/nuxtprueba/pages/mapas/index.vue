<script setup>
import Global from "~/Global";
const { data: mapas } = await useFetch(Global.urlApi + "maps");
const mapasFiltrar = ["District", "Kasbah", "Piazza", "The Range"];
</script>

<template>
  <div>
    <h1>Mapas</h1>
    <hr class="border border-danger opacity-100" />
    <table class="table table-bordered border-danger">
      <thead>
        <tr>
          <th></th>
          <th>Mapa</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="mapa in mapas.data.filter(
            (mapa) => !mapasFiltrar.includes(mapa.displayName)
          )"
          :key="mapa"
        >
          <td class="w-auto p-0">
            <NuxtImg :src="mapa.splash" class="w-100" />
          </td>
          <td class="w-25">{{ mapa.displayName }}</td>
          <td class="w-auto">{{ mapa.narrativeDescription }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
