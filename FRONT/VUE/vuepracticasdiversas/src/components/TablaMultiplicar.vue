<template>
    <div>
        <h1>Tabla Multiplicar</h1>
        <input type="number" v-model="num" />
        <br /><br />
        <hr />
        <h2>Con methods</h2>
        <button @click="calcTablaMult()">Calcular tabla</button>
        <br /><br />
        <div v-html="html"></div>
        <hr />
        <h2>Con directivas</h2>
        <div v-for="mult in 10" :key="mult">
            {{ num }} x {{ mult }} = {{ num * mult }}
        </div>
        <hr />
        <h2>Con filters</h2>
        <div v-for="mult in 10" :key="mult" v-html="$filters.getMultiplicacion(num, mult)">
        </div>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicarComponent",
    data() {
        return {
            num: 0,
            html: ""
        }
    },
    methods: {
        calcTablaMult() {
            this.html = "<table border='1'><tbody>";
            for (let i = 1; i <= 10; i++)
                this.html += "<tr><td>" +
                    this.num + " x " + i + "</td><td> "
                    + this.num * i + "</td></tr>";
            this.html += "</tbody></table>"
        }
    }
}
</script>

<style></style>