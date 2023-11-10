<template>
  <div v-if="arma.data">
    <div class="card w-50 mx-auto">
      <NuxtImg
        class="card-img-top w-100 mx-auto"
        :src="arma.data.displayIcon"
        v-if="arma.data.displayIcon"
      />
      <div class="card-body">
        <h5 class="card-title mt-3" v-if="arma.data.displayName">
          {{ arma.data.displayName }}
        </h5>
        <div v-if="arma.data.shopData">
          <h5 v-if="arma.data.shopData.categoryText">
            {{ arma.data.shopData.categoryText }}
          </h5>
          <h5 v-if="arma.data.shopData.cost">
            Coste: {{ arma.data.shopData.cost }}
          </h5>
        </div>
      </div>
    </div>
    <h2>Skins</h2>
    <hr class="border border-danger opacity-100" />
    <div class="row" v-if="arma.data.skins">
      <div
        class="col-3"
        v-for="skin in arma.data.skins.filter(
          (skin) => skin.displayName !== 'Diseño favorito aleatorio'
        )"
        :key="skin"
      >
        <div class="card border-danger border-2 mb-2">
          <div class="card-body">
            <NuxtImg :src="skin.chromas[0].fullRender" class="card-img-top" />
            <h5 class="card-title mt-3" v-if="skin.displayName">
              {{ skin.displayName }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Global from "~/Global";
let route = useRoute();
let skins = ref([]);
const { data: arma } = await useFetch(
  Global.urlApi + "weapons/" + route.params.id,
  { query: { language: "es-ES" } }
);
</script>
