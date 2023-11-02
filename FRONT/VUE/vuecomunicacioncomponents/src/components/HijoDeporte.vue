<template>
    <div>
        <h1>Hijo {{ deporte }}</h1>
        <button @click="seleccionarFavHijo()">Favorito</button>
    </div>
</template>

<script>
export default {
    name: "HijoDeporte",
    props: ["deporte"],
    methods: {
        seleccionarFavHijo() {
            console.log(this.deporte + " fav");
            this.$emit("seleccionarFavPadre", this.deporte);
        }
    },
    mounted() {
        console.log("Hijo montado");
    }
}
</script>