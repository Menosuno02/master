<template>
    <div>
        <h1>Propiedades computadas (comptued)</h1>
        <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego">
            </li>
        </ul>
        <button @click="getJuegosAzules()">Juegos azules</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    name: "PropComputadasComponent",
    data() {
        return {
            juegos: ["Parchis", "Uno", "Escondite inglés", "21"],
            html: ""
        }
    },
    computed: {
        juegosRojos() {
            let datos = this.juegos;
            for (let i = 0; i < datos.length; i++)
                datos[i] = "<span style='color:red'>" + datos[i] + "</span>";
            return datos;
        }
    },
    methods: {
        getJuegosAzules() {
            this.html = "";
            for (let juego of this.juegos)
                this.html += "<h4 style='color:blue'>" + juego + "</h4>";
        }
    }
}
</script>

<style></style>