<template>
    <div id="menu">
        <router-link to="/">
            Home
        </router-link><br />
        <router-link to="/holamundo">
            Hola Mundo
        </router-link><br />
        <router-link to="/cine">
            Cine
        </router-link><br />
        <router-link to="/musica">
            Música
        </router-link>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style scoped>
div#menu :visited {
    color: blue;
    text-decoration: none;
}
</style>