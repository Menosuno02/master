<template>
    <div>
        <h1>Métodos Filter</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                {{ num }}, {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul>
            <li v-for="nom in nombres" :key="nom">
                {{ nom }}, {{ $filters.mayuscula(nom) }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MetodosFilterComponent",
    data() {
        return {
            numeros: [2, 6, 18, 3, 507],
            nombres: ["Lucas", "Laura", "Hermenegildo"]
        }
    }
}
</script>

<style></style>