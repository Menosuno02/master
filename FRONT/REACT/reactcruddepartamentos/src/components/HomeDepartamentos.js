import React, { Component, useRef } from 'react'
import Global from '../Global';
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';

export default class HomeDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false
  }

  loadDepartamentos = () => {
    let url = Global.urlApiDept;
    let request = "api/Departamentos";
    axios.get(url + request).then((response) => {
      this.setState({
        departamentos: response.data,
        status: true
      });
    });
  }

  componentDidMount = () => {
    this.loadDepartamentos();
    setInterval(() => this.loadDepartamentos(), 2500);
  }

  render() {
    if (!this.state.status) {
      return (
        <img alt="" className='mx-auto d-block' src={loadingImage} />
      );
    } else {
      return (
        <div className='container-fluid mt-3'>
          <h1>Departamentos</h1>
          <hr className='border border-primary opacity-100' />
          {
            this.state.status &&
            (
              <table className='table'>
                <thead className='border-primary'>
                  <tr>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.departamentos.map((dept, index) => {
                      return (
                        <tr key={index}>
                          <td>{dept.nombre}</td>
                          <td>{dept.localidad}</td>
                          <td>
                            <NavLink
                              className="btn btn-success btn-sm me-1"
                              to={"/detalles/" + dept.numero +
                                "/" + dept.nombre +
                                "/" + dept.localidad}>
                              Detalles
                            </NavLink>
                            <NavLink
                              className="btn btn-primary btn-sm me-1"
                              to={"/update/" + dept.numero}>
                              Modificar</NavLink>
                            <NavLink
                              className="btn btn-danger btn-sm"
                              to={"/delete/" + dept.numero}>
                              Eliminar</NavLink>
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
      );
    }
  }
}
