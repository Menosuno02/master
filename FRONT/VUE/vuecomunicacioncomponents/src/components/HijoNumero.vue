<template>
    <div>
        <h1>Número Hijo: {{ numero }}</h1>
        <button @click="sumarNum()">Sumar {{ numero }}</button>
    </div>
</template>

<script>
export default {
    name: "HijoNumero",
    props: ["numero"],
    methods: {
        sumarNum() {
            this.$emit("sumarNumero", this.numero)
        }
    }
}
</script>