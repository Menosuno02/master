<template>
    <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/collatz">Collatz</router-link>
        <router-link to="/multiplicar">TablaMult</router-link>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
div#menu>* {
    margin-right: 10px;
}
</style>