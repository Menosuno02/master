<template>
    <div>
        <h1>Números Padre</h1>
        <h2>La suma es {{ suma }}</h2>
        <button @click="generarNumero()">Nuevo número</button>
        <hr />
        <div v-for="num in numeros" :key="num">
            <HijoNumero :numero="num" @sumarNumero="sumarNumero" />
        </div>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

export default {
    name: "PadreNumeros",
    components: { HijoNumero },
    data() {
        return {
            suma: 0,
            numeros: []
        }
    },
    methods: {
        generarNumero() {
            this.numeros.push(parseInt(Math.random() * 100) + 1);
        },

        sumarNumero(numero) {
            this.suma += numero;
        }
    }
}
</script>