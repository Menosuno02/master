<template>
    <div>
        <h1>Selección multiple</h1>
        <form @submit.prevent="mostrarSeleccionados()">
            <select v-model="selectMultiple" multiple :size="comics.length">
                <option :value="comic" v-for="comic in comics" :key="comic">
                    {{ comic }}
                </option>
            </select>
            <button>Mostrar seleccionados</button>
        </form>
        <h3>{{ seleccionados }}</h3>
        <!--
        <div v-if="selectMultiple.length > 0">
            <div v-for="selected in selectMultiple" :key="selected">
                <h2>{{ selected }}</h2>
            </div>
        </div>
        -->
    </div>
</template>

<script>
export default {
    name: "SeleccionMultiple",
    data() {
        return {
            selectMultiple: [],
            seleccionados: "",
            comics: ["Spiderman", "Wolverine", "Avengers", "Batman"]
        }
    },
    methods: {
        mostrarSeleccionados() {
            this.seleccionados = "";
            for (let selected of this.selectMultiple)
                this.seleccionados += selected + ", "
        }
    }
}
</script>