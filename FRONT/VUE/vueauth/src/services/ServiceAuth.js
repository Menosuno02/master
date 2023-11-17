import Global from "@/Global";
import axios from "axios";

export default class ServiceAuth {
  iniciarSesion(usuario, contraseña) {
    return new Promise((resolve) => {
      let user = {
        userName: usuario,
        password: contraseña,
      };
      let url = Global.urlApi;
      let request = "api/Auth/Login";
      axios.post(url + request, user).then((response) => {
        resolve(response.data);
      });
    });
  }

  getEmple(token) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Empleados";
      axios
        .get(url + request, { Authorization: "bearer " + token })
        .then((response) => {
          resolve(response.data);
        });
    });
  }
}
