<template>
  <div>
    <h1 class="fw-bold">Departamentos</h1>
    <hr class="border border-primary opacity-100" />
    <table v-if="departamentos.length > 0" class="table">
      <thead class="border-primary">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departamentos" :key="dept">
          <td>{{ dept.idDepartamento }}</td>
          <td>{{ dept.nombre }}</td>
          <td>{{ dept.localidad }}</td>
          <td>
            <router-link
              class="btn btn-success btn-sm me-1"
              :to="
                '/departamento/' +
                dept.idDepartamento +
                '/' +
                dept.nombre +
                '/' +
                dept.localidad
              "
            >
              Detalles
            </router-link>
            <router-link
              class="btn btn-primary btn-sm me-1"
              :to="'/update/' + dept.idDepartamento"
            >
              Modificar
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteDepartamento(dept.idDepartamento)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <img v-else src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceDept from "../services/ServiceDept";
const service = new ServiceDept();

export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
    };
  },
  mounted() {
    service.getDepartamentos().then((result) => {
      this.departamentos = result;
    });
  },
  methods: {
    /*
    deleteDepartamento(id) {
      Swal.fire({
        title: "Vas a borrar el departamento" + id,
        text: "¿Estás seguro? No podrás revertir",
        // icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          service.deleteDepartamento(id).then((result) => {
            console.log(result);
            Swal.fire({
              title: "Departamento" + id + " borrado",
              text: "El departamento fue eliminado con éxito",
              icon: "success",
            });
          });
        }
      });
    },
    */
  },
};
</script>
