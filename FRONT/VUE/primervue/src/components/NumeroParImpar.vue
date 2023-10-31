<template>
    <div>
        <h1>Número par impar</h1>
        <label>Número: </label>
        <input type="number" v-model="num" />
        <hr />

        <h3>Con computed</h3>
        <div v-html="evaluarNumero"></div>
        <hr />

        <h3>Con methods</h3>
        <div v-html="html" />
        <button @click="getParImpar()">Comprobar</button>
        <hr />

        <h3>Con directivas</h3>
        <h4 v-if="num % 2 == 0">{{ num }} es par</h4>
        <h4 v-else>{{ num }}es impar</h4>
    </div>
</template>

<script>
export default {
    name: "NumeroParImparComponent",
    data() {
        return {
            num: 0,
            html: ""
        }
    },
    methods: {
        getParImpar() {
            if (this.num % 2 == 0)
                this.html = "<h4>" + this.num + " es par</h4>";
            else
                this.html = "<h4>" + this.num + " es impar</h4>";
        }
    },
    computed: {
        evaluarNumero() {
            let numero = this.num;
            if (numero % 2 == 0)
                return "<h4>" + numero + " es par</h4>";
            else
                return "<h4>" + numero + " es impar</h4>";
        }
    }
}
</script>

<style scoped></style>