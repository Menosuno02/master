<script setup>
import Global from "~/Global";
const { data: agentes } = await useFetch(Global.urlApi + "agents", {
  query: { language: "es-ES", isPlayableCharacter: "true" },
});
</script>

<template>
  <div>
    <NuxtImg src="/images/valorant.png" class="w-50 d-block mx-auto" />
    <hr class="border border-danger opacity-100" />
    <div class="container text-center mt-3" v-if="agentes">
      <div class="row">
        <div class="col-2" v-for="agente in agentes.data" :key="agente">
          <div class="card mb-3">
            <NuxtImg
              class="card-img-top h-auto"
              :src="agente.killfeedPortrait"
            />
            <div class="card-body">
              <h3
                class="card-title mb-3 text-uppercase fs-2"
                style="font-family: 'Anton', sans-serif"
              >
                {{ agente.displayName }}
              </h3>
              <NuxtLink
                class="btn btn-danger w-100 btn-sm"
                :to="'/agente/' + agente.uuid"
              >
                Información
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
