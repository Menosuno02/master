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
            let num = this.num;
            this.collatz = [];
            while (num >= 1) {
                this.collatz.push(num)
                if (num == 1) break;
                (num % 2 == 0) ? num /= 2 : num = num * 3 + 1;
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