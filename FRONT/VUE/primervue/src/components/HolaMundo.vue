<template>
    <div>
        <h1>App de prueba en Vue</h1>
        <img src="../assets//images/marte.jpg" />
        <h2>
            Nombre: <span style="color:blue">{{ nombre }}</span>
        </h2>
        <h2>
            Número: <span style="color:green">{{ numero }}</span>
        </h2>
    </div>
</template>

<script>
export default {
    name: "HolaMundo",
    data() {
        return {
            nombre: "Alejandro",
            numero: 26,
            array: [],
            objeto: {}
        }
    }
};
</script>

<style scoped>
h1 {
    color: fuchsia;
}

@import "../assets/css/estilos.css";
</style>