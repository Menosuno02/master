<template>
  <div>
    <h1>Página principal</h1>
    <hr class="border border-primary opacity-100" />
    <div class="row" v-for="index in 6" :key="index">
      <div class="col-2" v-for="index2 in 6" :key="index2">
        <img src="../assets/images/cat.gif" width="145" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>
