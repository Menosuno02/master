<template>
    <div id="menu">
        <router-link v-for="num in nums" :key="num" :to="'/tablamult/' + num">Tabla Mult {{ num }}</router-link>
    </div>
</template>

<script>
export default {
    name: "MenuMultiplicar",
    data() {
        return {
            nums: []
        }
    },
    mounted() {
        for (let i = 0; i < 3; i++)
            this.nums.push(parseInt(Math.random() * 50) + 1);
    }
}
</script>

<style>
#menu>* {
    margin-right: 10px;
}
</style>