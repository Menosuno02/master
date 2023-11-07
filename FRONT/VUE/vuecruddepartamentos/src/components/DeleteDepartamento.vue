<template>
  <div>
    <h1>Eliminando departamento</h1>
    <img src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceDept from "@/services/ServiceDept";
const service = new ServiceDept();

export default {
  name: "DeleteDepartamento",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.deleteDepartamento();
    },
  },
  methods: {
    deleteDepartamento() {
      let dept = this.$route.params.id;
      service.deleteDepartamento(dept).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    this.deleteDepartamento();
  },
};
</script>
