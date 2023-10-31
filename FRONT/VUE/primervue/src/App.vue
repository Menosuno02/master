<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h1 style="color: blueviolet;">Título estático App.vue</h1>
  <hr />
  <!-- <HolaMundo /> -->
  <MenuComponent />
  <router-view></router-view>
</template>

<script>
// import HolaMundo from './components/HolaMundo.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    // HolaMundo,
    MenuComponent
  }
}
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
