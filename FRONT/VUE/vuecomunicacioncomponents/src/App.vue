<template>
  <MenuComponent /><br />
  <MenuMultiplicar />
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import MenuMultiplicar from './components/MenuMultiplicar.vue';

export default {
  name: 'App',
  components: { MenuComponent, MenuMultiplicar }
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
