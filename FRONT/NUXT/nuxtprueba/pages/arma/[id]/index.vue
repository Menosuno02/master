<script setup>
import Global from "~/Global";
let route = useRoute();
let titulo = ref("Valorant Nuxt | Arma");
const { data: arma } = await useFetch(
  Global.urlApi + "weapons/" + route.params.id,
  { query: { language: "es-ES" } }
);
</script>

<template>
  <div>
    <Head>
      <Title>{{ titulo }}</Title>
      <Meta name="description" :content="titulo" />
    </Head>
    <Body>
      <div v-if="arma.data">
        <div class="card w-50 mx-auto mb-3 border-danger">
          <div class="card-body">
            <NuxtImg
              class="card-img-top w-100 mx-auto"
              :src="arma.data.displayIcon"
              v-if="arma.data.displayIcon"
            />
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
        <h1 class="text-danger">Skins</h1>
        <hr class="border border-danger opacity-100" />
        <div class="row" v-if="arma.data.skins">
          <div
            class="col-3"
            v-for="skin in arma.data.skins.filter(
              (skin) => skin.displayName !== 'Diseño favorito aleatorio'
            )"
            :key="skin"
          >
            <div class="card mb-3">
              <div class="card-body">
                <NuxtImg
                  :src="skin.chromas[0].fullRender"
                  class="card-img-top"
                />
                <h5 class="card-title mt-3" v-if="skin.displayName">
                  {{ skin.displayName }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  </div>
</template>
