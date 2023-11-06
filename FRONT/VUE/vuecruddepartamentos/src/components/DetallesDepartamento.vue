<template>
  <div>
    <h1>Detalles {{ this.$route.params.id }}</h1>
    <hr class="border border-primary opacity-100" />
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ this.$route.params.nombre }}</h5>
        <p class="card-text">Localidad: {{ this.$route.params.localidad }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetallesDepartamento",
};
</script>
