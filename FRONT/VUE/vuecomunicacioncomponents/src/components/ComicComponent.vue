<template>
    <div>
        <h2>{{ comic.titulo }}</h2>
        <h3>{{ comic.descripcion }}</h3>
        <h4>{{ comic.year }}</h4>
        <img :src="comic.imagen" />
    </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic"]
}
</script>