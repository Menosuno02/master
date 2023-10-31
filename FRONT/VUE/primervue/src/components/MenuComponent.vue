<template>
    <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/holamundo">Hola Mundo</router-link>
        <router-link to="/cine">Cine</router-link>
        <router-link to="/musica">Música</router-link>
        <router-link to="/ciclovida">Hooks</router-link>
        <router-link to="/directivas">Directivas</router-link>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
}
</script>

<style scoped>
div#menu>a {
    margin-right: 10px;
}
</style>