<template>
  <MenuDepartamentos />
  <router-view class="mt-3 container-fluid"></router-view>
</template>

<script>
import MenuDepartamentos from "./components/MenuDepartamentos.vue";

export default {
  name: "App",
  components: { MenuDepartamentos },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
