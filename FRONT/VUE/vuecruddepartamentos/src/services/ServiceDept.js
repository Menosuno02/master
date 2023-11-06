import Global from "@/Global";
import axios from "axios";

export default class ServiceDept {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEjemplos;
            let request = "api/Departamentos";
            axios.get(url + request).then((response) => {
                resolve(response.data); // DEPARTAMENTOS
            });
        });
    }

    searchDepartamento(idDepartamento) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEjemplos;
            let request = "api/Departamentos/" + idDepartamento;
            axios.get(url + request).then((response) => {
                resolve(response.data); // DEPARTAMENTO
            });
        });
    }

    createDepartamento(departamento) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEjemplos;
            let request = "api/Departamentos";
            axios.post(url + request, departamento).then((response) => {
                resolve(response);
            });
        });
    }

    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEjemplos;
            let request = "api/Departamentos";
            axios.put(url + request, departamento).then((response) => {
                resolve(response);
            });
        });
    }
}