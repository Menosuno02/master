<template>
    <div>
        <h1>Directivas Vue</h1>
        <label>Nombre: </label>
        <input type="text" v-model="nombre" /><br />
        <label>Edad: </label>
        <input type="number" v-model="edad" /><br />
        <h3>{{ nombre }} tiene {{ edad }} años</h3><br />

        <input type="number" v-model="num" />
        <h3 v-if="num > 0" style="color:green">
            {{ num }} es positivo
        </h3>
        <h3 v-else-if="num < 0" style="color:red">
            {{ num }} es negativo
        </h3>
        <h3 v-else style="color: black;">
            {{ num }} es cero
        </h3>

        <br />{{ $data }}<br /><br />

        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{ serie }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "DirectivasComponent",
    data() {
        return {
            series: ["Futurama", "Juego de tronos", "Friends"],
            nombre: "",
            edad: 0,
            num: 0
        }
    },
}

/*
console.log(0 == "0")
console.log(0 == [])
console.log("0" == [])
console.log("2" - 2)
console.log("2" + 2)
*/
</script>
<style></style>