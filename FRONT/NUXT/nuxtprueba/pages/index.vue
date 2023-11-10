<template>
  <div>
    <h1>Página principal</h1>
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
              <h5 class="card-title">
                {{ agente.displayName }}
              </h5>
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

<script setup>
import Global from "../Global";

const { data: agentes } = await useFetch(Global.urlApi + "agents", {
  query: { language: "es-ES", isPlayableCharacter: "true" },
});
</script>
