<template>
  <div v-if="agente.data">
    <h1>{{ agente.data.displayName }} ({{ agente.data.role.displayName }})</h1>
    <hr class="border border-danger opacity-100" />
    <div class="row">
      <div class="col-5">
        <div
          class="card bg-dark w-100 mb-3 border-danger"
          :style="`background-image: url(${agente.data.background});
          background-repeat: no-repeat;
          background-size: 100% 100%;`"
        >
          <NuxtImg :src="agente.data.fullPortrait" class="w-100" />
        </div>
      </div>
      <div class="col-7">
        <div class="card mb-3 border-danger border-2">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-2 col-sm-4">
                <NuxtImg :src="agente.data.displayIcon" class="w-100" />
              </div>
              <div class="col-lg-10 col-sm-8">
                <p class="fs-5">{{ agente.data.description }}</p>
              </div>
            </div>
            <table class="table table-dark border-danger mt-3">
              <thead class="border-danger">
                <tr>
                  <th></th>
                  <th>Habilidad</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ability in agente.data.abilities" :key="ability">
                  <td>
                    <NuxtImg
                      :src="ability.displayIcon"
                      width="40"
                      v-if="ability.displayIcon"
                    />
                    <p v-else class="fw-bold">Pasiva</p>
                  </td>
                  <td>{{ ability.displayName }}</td>
                  <td>{{ ability.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NuxtImg v-else src="../assets/images/loading.gif" />
</template>

<script setup>
import Global from "@/Global";
let route = useRoute();
const { data: agente } = await useFetch(
  Global.urlApi + "agents/" + route.params.id,
  { query: { language: "es-ES" } }
);
</script>
