<template>
    <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/deportes">Deportes</router-link>
        <router-link to="/numeros">Números</router-link>
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