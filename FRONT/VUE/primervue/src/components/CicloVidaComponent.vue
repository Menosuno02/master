<template>
    <div>
        <h1>Ciclo vida</h1>
        <h2>{{ saludo }}</h2>
        <button @click="cambiarSaludo()">Cambiar saludo</button>
    </div>
</template>

<script>
export default {
    name: "CicloVidaComponent",
    data() {
        return {
            saludo: "Hola"
        }
    },
    methods: {
        cambiarSaludo() {
            this.saludo = "Buenos días";
        }
    },
    mounted() { // Segundo
        console.log(this.saludo + ". Componente montado");
    },
    created() { // Primero
        console.log("Componente creado");
    },
    updated() { // Al cambiar saludo
        console.log("Componente modificado");
    },
    unmounted() { // Al cambiar ruta
        console.log("Componente eliminado");
    }
}
</script>

<style></style>