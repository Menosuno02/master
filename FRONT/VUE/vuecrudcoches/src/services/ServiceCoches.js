import Global from "@/Global";
// import axios from "axios";

export default class ServiceCoches {
    getCoches() {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Coches";
            /*
            axios.get(url + request).then((response) => {
                resolve(response.data); // COCHES
            });
            */
            fetch(url + request, { method: "GET" })
                .then(response => response.json())
                .then(data => resolve(data));
        });
    }

    searchCoche(idCoche) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Coches/FindCoche/" + idCoche;
            /*
            axios.get(url + request).then((response) => {
                resolve(response.data); // COCHE
            });
            */
            fetch(url + request, { method: "GET" })
                .then(response => response.json())
                .then(data => resolve(data));
        });
    }

    createCoche(coche) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Coches/InsertCoche";
            /*
            axios.post(url + request, coche).then((response) => {
                resolve(response);
            });
            */
            fetch(url + request, {
                method: "POST",
                body: JSON.stringify(coche),
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(response => resolve(response));

        });
    }

    updateCoche(coche) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Coches/UpdateCoche";
            /*
            axios.put(url + request, coche).then((response) => {
                resolve(response);
            });
            */
            fetch(url + request, {
                method: "PUT",
                body: JSON.stringify(coche),
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(response => resolve(response));
        });
    }

    deleteCoche(idCoche) {
        return new Promise(function (resolve) {
            let url = Global.urlApi;
            let request = "api/Coches/DeleteCoche/" + idCoche;
            /*
            axios.get(url + request).then((response) => {
                resolve(response);
            });
            */
            fetch(url + request, { method: "GET" })
                .then(response => resolve(response));
        });
    }
}