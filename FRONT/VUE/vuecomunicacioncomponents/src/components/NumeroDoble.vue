<template>
    <div>
        <h1>Número Doble</h1>
        <h2 v-if="this.mensaje">
            {{ mensaje }}
        </h2>
        <div v-else>
            <h2>Número: {{ numero }}</h2>
            <h2>Doble: {{ doble }}</h2>
        </div>
        <button @click="redirectToHome()">Volver a Home</button>
    </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    watch: {
        "$route.params.numero"(nextVal, oldVal) {
            if (nextVal !== oldVal) {
                this.numero = parseInt(this.$route.params.numero);
                this.doble = this.numero * 2;
            }
        }
    },
    methods: {
        redirectToHome() {
            this.$router.push("/");
        }
    },
    data() {
        return {
            mensaje: null,
            numero: 0,
            doble: 0
        }
    },
    mounted() {
        let paramNum = this.$route.params.numero;
        if (this.$route.params.numero == "") {
            console.log("Sin parámetro")
            this.mensaje = "No tenemos parámetros";
        } else {
            console.log("Parámetro recibido: " + paramNum);
            this.numero = parseInt(this.$route.params.numero);
            this.doble = this.numero * 2;
        }
    },
}
</script>