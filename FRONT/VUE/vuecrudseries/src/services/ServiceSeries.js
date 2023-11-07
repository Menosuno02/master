import Global from "@/Global";
import axios from "axios";

export default class ServiceSeries {
    getSeries() {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Series";
            axios.get(url + request).then((response) => {
                resolve(response.data); // SERIES
            });
        });
    }

    searchSerie(idSerie) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Series/" + idSerie;
            axios.get(url + request).then((response) => {
                resolve(response.data); //SERIE
            });
        });
    }

    getPersonajes() {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Personajes";
            axios.get(url + request).then((response) => {
                resolve(response.data); // PERSONAJES
            });
        });
    }

    loadPersonajesSerie(idSerie) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Series/PersonajesSerie/" + idSerie;
            axios.get(url + request).then((response) => {
                resolve(response.data); // PERSONAJES DE SERIE
            });
        });
    }

    createPersonaje(personaje) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Personajes";
            axios.post(url + request, personaje).then((response) => {
                resolve(response);
            });
        });
    }

    updatePersonaje(personaje, serie) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Personajes/" +
                personaje + "/" + serie;
            axios.put(url + request).then((response) => {
                resolve(response);
            });
        });
    }

    searchPersonaje(idPersonaje) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Personajes/" + idPersonaje;
            axios.get(url + request).then((response) => {
                resolve(response.data); // PERSONAJE
            });
        });
    }
}