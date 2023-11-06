import Global from "../Global";
import axios from "axios";

export default class ServiceCoches {

    getMetodoParametros(param1) {
        // dentro del método devolvemos la promesa
        return new Promise(function (resolve) {
            resolve("Hola " + param1);
        });
    }

    getCoches() {
        return new Promise(function (resolve) {
            let url = Global.urlApiCoches;
            let request = "webresources/coches";
            let coches = [];
            axios.get(url + request).then((response) => {
                coches = response.data;
                resolve(coches);
            });
        });
    }

    /*
    getCoches() {
        let url = Global.urlApiCoches;
        let request = "webresources/coches";
        let coches = [];
        axios.get(url + request).then((response) => {
            coches = response.data;
            console.log(coches);
        });
        console.log(coches);
        return coches;
    }
    */
}