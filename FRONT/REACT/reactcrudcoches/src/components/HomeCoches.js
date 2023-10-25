import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class HomeCoches extends Component {
  state = {
    coches: [],
    status: false
  }

  loadCoches = () => {
    let url = Global.urlApiCoches;
    let request = "api/coches";
    axios.get(url + request).then((response) => {
      this.setState({
        coches: response.data,
        status: true
      })
    })
  }

  deleteCoche = (id) => {
    Swal.fire({
      title: 'Vas a borrar el coche ' + id,
      text: "¿Estás seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar',
      cancelButtonText: "No, cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        let url = Global.urlApiCoches;
        let request = "api/Coches/DeleteCoche/" + id;
        axios.delete(url + request).then((response) => {
          this.setState({
            status: false
          });
          this.loadCoches();
        });
        Swal.fire(
          'Coche borrado',
          'El coche ' + id + " ha sido borrado",
          'success'
        );

      }
    });
  }

  componentDidMount = () => {
    this.loadCoches();
    setInterval(() => this.loadCoches(), 10000);
  }

  render() {
    if (!this.state.status)
      return (<img className='d-block mx-auto' src={loadingImage} alt="" />)
    else {
      return (
        <div className='container-fluid mt-3'>
          <h1>Coches</h1>
          <hr className='border border-primary opacity-100' />
          {
            this.state.status &&
            (
              <table className='table'>
                <thead className='border-primary'>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.coches.map((coche, index) => {
                      return (
                        <tr>
                          <td>{coche.marca}</td>
                          <td>{coche.modelo}</td>
                          <td>{coche.conductor}</td>
                          <td>
                            <img
                              className='img-fluid'
                              alt=""
                              width="100"
                              src={coche.imagen} />
                          </td>
                          <td>
                            <NavLink
                              className="btn btn-success btn-sm me-1"
                              to={"/detalles/" + coche.idCoche}>
                              Detalles
                            </NavLink>
                            <NavLink
                              className="btn btn-primary btn-sm me-1"
                              to={"/update/" + coche.idCoche}>
                              Modificar
                            </NavLink>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => this.deleteCoche(coche.idCoche)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            )
          }
        </div >
      )
    }
  }
}
