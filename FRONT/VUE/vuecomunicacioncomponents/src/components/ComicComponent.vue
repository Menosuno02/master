<template>
    <div>
        <h2>{{ comic.titulo }}</h2>
        <h3>{{ comic.descripcion }}</h3>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
            Año: {{ comic.year }}
        </h4>
        <img :src="comic.imagen" /> <br />
        <button @click="seleccionarFav()">Marcar como favorito</button>
        <button @click="eliminarComic()" style="background-color:red;color:white">Eliminar</button>
    </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic", "index"],
    methods: {
        seleccionarFav() {
            this.$emit("seleccionarFav", this.comic);
        },
        eliminarComic() {
            this.$emit("eliminarComic", this.index);
        }
    }
}
</script>

<style>
@import "../assets//css/estilocomics.css";
</style>