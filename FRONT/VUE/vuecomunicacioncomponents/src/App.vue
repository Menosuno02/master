<template>
  <PadreDeporte />
</template>

<script>
import PadreDeporte from "./components/PadreDeporte.vue"

export default {
  name: 'App',
  components: {
    PadreDeporte,
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
