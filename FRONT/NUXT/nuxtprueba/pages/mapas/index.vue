<script setup>
import Global from "~/Global";
let mapaElegido = ref(null);
const { data: mapas } = await useFetch(Global.urlApi + "maps");
const mapasFiltrar = ["District", "Kasbah", "Piazza", "The Range"];

async function changeMapa(uuid) {
  await useFetch(Global.urlApi + "maps/" + uuid).then((response) => {
    mapaElegido.value = response.data._rawValue.data;
  });
}
</script>

<template>
  <div>
    <h1>Mapas</h1>
    <hr class="border border-danger opacity-100" />
    <div class="row mb-3">
      <div class="col-5">
        <div
          class="btn-group-vertical w-100"
          role="group"
          aria-label="Vertical radio toggle button group"
        >
          <div
            v-for="mapa in mapas.data.filter(
              (mapa) => !mapasFiltrar.includes(mapa.displayName)
            )"
            :key="mapa"
            class="btn-group w-100"
            role="group"
          >
            <input
              type="radio"
              class="btn-check"
              name="vbtn-radio"
              :id="'vbtn-radio-' + mapa.uuid"
              autocomplete="off"
              width="100"
              @click="changeMapa(mapa.uuid)"
            />
            <label
              class="btn btn-outline-danger w-100"
              :for="'vbtn-radio-' + mapa.uuid"
            >
              {{ mapa.displayName }}
            </label>
          </div>
        </div>
      </div>
      <div class="col-7" v-if="mapaElegido">
        <div class="card">
          <NuxtImg :src="mapaElegido.splash" class="w-100 card-img-top" />
          <div class="card-body">
            <p class="card-text text-center">
              {{ mapaElegido.narrativeDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
