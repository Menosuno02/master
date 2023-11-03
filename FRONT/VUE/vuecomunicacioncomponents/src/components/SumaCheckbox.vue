<template>
    <div>
        <h1>Suma de Checkboxes</h1>
        <button @click="generarCheckboxes()">Generar checkboxes</button>
        <div v-for="num in nums" :key="num">
            <input type="checkbox" v-model="selected" :value="num" @change="changeSuma()" />
            <label>{{ num }}</label>
        </div>
        <h1>La suma es {{ suma }}</h1>
    </div>
</template>

<script>
export default {
    name: "SumaCheckbox",
    data() {
        return {
            nums: [],
            selected: [],
            suma: 0
        }
    },
    methods: {
        generarCheckboxes() {
            this.nums = [];
            for (let i = 0; i < 8; i++)
                this.nums.push(parseInt(Math.random() * 100) + 1);
        },
        changeSuma() {
            this.suma = 0;
            for (let num of this.selected)
                this.suma += num;
        }
    }
}
</script>