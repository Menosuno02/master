import Global from "../Global";
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados
            let request = "api/Empleados";
            axios.get(url + request).then((response) => {
                resolve(response.data); // empleados
            });
        });
    }

    findEmpleado(idEmpleado) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/" + idEmpleado;
            axios.get(url + request).then((response) => {
                resolve(response.data); // empleado
            });
        });
    }

    getOficios() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/oficios";
            axios.get(url + request).then((response) => {
                resolve(response.data); // oficios
            });
        });
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio;
            axios.get(url + request).then((response) => {
                resolve(response.data); // empleados del oficio
            });
        });
    }
}