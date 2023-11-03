<template>
    <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/deportes">Deportes</router-link>
        <router-link to="/numeros">Números</router-link>
        <router-link to="/comics">Comics</router-link>
        <router-link to="/select">Select Multiple</router-link>
        <router-link to="/checkbox">Suma Checkbox</router-link>
        <router-link to="/numdoble">Doble</router-link>
        <router-link to="/numdoble/3">Doble 3</router-link>
        <router-link to="/numdoble/781">Doble 781</router-link>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style scoped>
div#menu>* {
    margin-right: 10px;
}
</style>