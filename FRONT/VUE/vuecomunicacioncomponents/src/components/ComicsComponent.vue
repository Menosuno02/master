<template>
    <div>
        <h1>Cómics</h1>
        <form @submit.prevent="crearComic()">
            <label>Título: </label>
            <input type="text" v-model="comicForm.titulo" /><br />
            <label>Imagen: </label>
            <input type="text" v-model="comicForm.imagen" /><br />
            <label>Descripción: </label>
            <input type="text" v-model="comicForm.descripcion" /><br />
            <label>Año: </label>
            <input type="number" v-model="comicForm.year" /><br />
            <button>Crear cómic</button>
        </form>
        <div v-if="favorito" style="background-color: darkgoldenrod; color: white;">
            <h2>Favorito: {{ favorito.titulo }}</h2>
        </div>
        <hr />
        <div v-for="(comic, index) in comics" :key="comic" id="comics">
            <ComicComponent :comic="comic" :index="index" @seleccionarFav="seleccionarFav" @eliminarComic="eliminarComic" />
        </div>
    </div>
</template>

<script>
import ComicComponent from './ComicComponent.vue';

export default {
    name: "ComicsComponent",
    components: { ComicComponent },
    data() {
        return {
            comicForm: {
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0
            },
            favorito: null,
            comics: [
                {
                    titulo: "Spiderman",
                    imagen:
                        "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña",
                    year: 1997
                },
                {
                    titulo: "Wolverine",
                    imagen:
                        "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno",
                    year: 2003
                },
                {
                    titulo: "Guardianes de la Galaxia",
                    imagen:
                        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                    descripcion: "Yo soy Groot",
                    year: 2006
                },
                {
                    titulo: "Avengers",
                    imagen:
                        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores",
                    year: 1993
                },
                {
                    titulo: "Spawn",
                    imagen:
                        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons",
                    year: 2000
                },
                {
                    titulo: "Batman",
                    imagen:
                        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago",
                    year: 2001
                }
            ]
        }
    },
    methods: {
        seleccionarFav(comic) {
            this.favorito = comic;
        },
        eliminarComic(index) {
            this.comics.splice(index, 1);
        },
        crearComic() {
            this.comics.push({
                titulo: this.comicForm.titulo,
                descripcion: this.comicForm.descripcion,
                imagen: this.comicForm.imagen,
                year: this.comicForm.year
            });
        }
    }
}
</script>

<style>
@import "../assets/css/estilocomics.css";
</style>