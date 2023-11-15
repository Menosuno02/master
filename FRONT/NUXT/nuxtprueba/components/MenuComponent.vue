<script setup>
import Global from "~/Global";
const { data: armas } = await useFetch(Global.urlApi + "weapons");
</script>

<template>
  <nav class="navbar navbar-expand-md bg-danger">
    <div class="container-fluid">
      <span class="navbar-brand">
        <NuxtImg
          src="/images/valoranticon.jpg"
          width="30"
          height="30"
          class="me-2"
        />
        Valorant Nuxt
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Agentes</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Armas
            </a>
            <ul class="dropdown-menu flex-wrap justify-content">
              <li v-for="arma in armas.data" :key="arma">
                <NuxtLink
                  class="dropdown-item small"
                  :to="'/arma/' + arma.uuid"
                >
                  {{ arma.displayName }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/mapas">Mapas</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
