<template>
    <div>
        <h1>Tabla Multiplicar {{ num }}</h1>
        <div v-html="tabla"></div>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicarRouter",
    watch: {
        "$route.params.numero"(nextVal, oldVal) {
            if (nextVal !== oldVal) {
                this.tabla = "";
                this.num = this.$route.params.numero;
                for (let i = 1; i <= 10; i++) {
                    this.tabla += "<p>" + this.num + " x " + i +
                        " = " + this.num * i + "</p>";
                }
            }
        }
    },
    data() {
        return {
            num: 0,
            tabla: ""
        }
    },
    mounted() {
        this.num = parseInt(this.$route.params.numero);
        for (let i = 1; i <= 10; i++) {
            this.tabla += "<p>" + this.num + " x " + i +
                " = " + this.num * i + "</p>";
        }
    }
}
</script>