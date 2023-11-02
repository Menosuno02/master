<template>
    <div>
        <h1>Padre</h1>
        <h2 v-if="favorito != ''">Favorito: {{ favorito }}</h2>
        <hr />
        <div>
            <p v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :deporte="deporte" @seleccionarFavPadre="seleccionarFavPadre" />
            </p>
        </div>
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue';

export default {
    name: "PadreDeporte",
    components: { HijoDeporte },
    data() {
        return {
            deportes: ["Fútbol", "Baloncesto", "Balonmano",
                "Tenis", "Beísbol"],
            favorito: ""
        }
    },
    methods: {
        seleccionarFavPadre(deporte) {
            this.favorito = deporte;
        }
    }
}
</script>