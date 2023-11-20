<script setup>
import Global from "~/Global";
let mapaElegido = ref(null);
let titulo = ref("Valorant Nuxt | Mapa");
const { data: mapas } = await useFetch(Global.urlApi + "maps");
const mapasFiltrar = ["District", "Kasbah", "Piazza", "The Range"];

onMounted(() => {
  let uuid = document
    .querySelectorAll(".swiper-slide")[0]
    .getAttribute("data-uuid");
  changeMapaUuid(uuid);
});

async function changeMapa() {
  let uuid = document
    .querySelector(".swiper-slide-active")
    .getAttribute("data-uuid");
  await useFetch(Global.urlApi + "maps/" + uuid).then((response) => {
    mapaElegido.value = response.data._rawValue.data;
  });
}

async function changeMapaUuid(uuid) {
  await nextTick(async () => {
    await useFetch(Global.urlApi + "maps/" + uuid).then((response) => {
      mapaElegido.value = response.data._rawValue.data;
    });
  });
}
</script>

<template>
  <div>
    <Head>
      <Title>{{ titulo }}</Title>
      <Meta name="description" :content="titulo" />
    </Head>
    <Body>
      <h1 class="text-light">Mapas</h1>
      <hr class="border border-danger opacity-100" />
      <div class="row pb-5 mt-5">
        <div class="col-4">
          <Swiper
            class="h-100 bg-opacity-25 bg-dark rounded-5"
            :slides-per-view="10"
            :direction="'vertical'"
            :centered-slides="true"
            :pagination="{
              clickable: true,
            }"
            :slide-to-clicked-slide="true"
            @slide-change="changeMapa()"
          >
            <SwiperSlide
              class="h-10 d-flex justify-content-center align-items-center opacity-100"
              v-for="mapa in mapas.data.filter(
                (mapa) => !mapasFiltrar.includes(mapa.displayName)
              )"
              :key="mapa"
              :data-uuid="mapa.uuid"
            >
              <div>
                <h1 class="text-light anton-font">
                  {{ mapa.displayName }}
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="col-8" v-if="mapaElegido">
          <div class="card">
            <NuxtImg
              placeholder
              :src="mapaElegido.splash"
              class="w-100 card-img-top"
            />
            <div class="card-body">
              <p class="card-text text-center">
                {{ mapaElegido.narrativeDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Body>
  </div>
</template>

<style>
.swiper-slide-active h1 {
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.swiper-slide-active h1::before {
  content: "▸ ";
  display: inline-block;
}

.h-10 {
  height: 10% !important;
}
</style>
