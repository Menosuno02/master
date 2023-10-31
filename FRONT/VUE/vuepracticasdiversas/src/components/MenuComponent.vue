<template>
    <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/collatz">Collatz</router-link>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
div#menu a {
    margin-right: 10px;
}
</style>