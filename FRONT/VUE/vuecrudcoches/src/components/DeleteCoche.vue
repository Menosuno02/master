<template>
  <div>
    <h1>Eliminando Coche {{ this.$route.params.id }}</h1>
    <img src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "DeleteCoche",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.deleteCoche();
    },
  },
  methods: {
    deleteCoche() {
      let coche = this.$route.params.id;
      service.deleteCoche(coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    this.deleteCoche();
  },
};
</script>
