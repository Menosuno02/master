<script setup>
import Global from "@/Global";
let route = useRoute();
let titulo = ref("Valorant Nuxt | Agente");
const { data: agente } = await useFetch(
  Global.urlApi + "agents/" + route.params.id,
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
      <div v-if="agente.data">
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
            <div class="card mb-3 border-danger">
              <div class="card-body">
                <div
                  class="row text-center text-danger mb-3 text-uppercase fw-bolder"
                >
                  <h1 class="anton-font">{{ agente.data.displayName }}</h1>
                </div>
                <div class="row">
                  <div class="col-lg-2 col-sm-4">
                    <NuxtImg
                      :src="agente.data.displayIcon"
                      class="w-100 border-1 border-danger img-thumbnail"
                    />
                  </div>
                  <div class="col-lg-10 col-sm-8">
                    <p class="fs-3 fw-bolder">
                      Rol: {{ agente.data.role.displayName }}
                      <NuxtImg
                        :src="agente.data.role.displayIcon"
                        width="20"
                        class="ms-2 pb-1"
                      />
                    </p>
                    <p class="fs-6 text-danger">
                      {{ agente.data.description }}
                    </p>
                  </div>
                </div>
                <table
                  class="table table-dark table-borderless mt-3 table-sm table-hover"
                >
                  <thead class="border-danger">
                    <tr>
                      <th></th>
                      <th>Habilidad</th>
                      <th>Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ability in agente.data.abilities" :key="ability">
                      <td class="">
                        <NuxtImg
                          class="img-thumbnail"
                          :src="ability.displayIcon"
                          width="40"
                          v-if="ability.displayIcon"
                        />
                        <p v-else class="fw-bold">Pasiva</p>
                      </td>
                      <td>{{ ability.displayName }}</td>
                      <td class="w-75">{{ ability.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtImg v-else src="../assets/images/loading.gif" />
    </Body>
  </div>
</template>
