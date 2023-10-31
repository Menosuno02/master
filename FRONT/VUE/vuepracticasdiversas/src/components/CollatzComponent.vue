<template>
    <div>
        <h1>Conjetura de Collatz</h1>
        <label>Número: </label>
        <input type="number" v-model="num" />
        <button @click="calcCollatz()">Calcular Collatz</button><br /><br />
        <div v-for="num in collatz" :key="num" v-html="$filters.evaluarNum(num)">
        </div>
    </div>
</template>

<script>
export default {
    name: "CollatzComponent",
    data() {
        return {
            num: 0,
            collatz: []
        }
    },
    methods: {
        calcCollatz() {
            let numero = this.num;
            this.collatz = [];
            while (numero >= 1) {
                this.collatz.push(numero)
                if (numero == 1) break;
                (numero % 2 == 0) ? numero /= 2 : numero = numero * 3 + 1;
            }
        }
    }
}
</script>

<style>
div span {
    font-weight: bold;
}
</style>