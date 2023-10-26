import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export default class Menu extends Component {
  state = {
    equipos: [],
    statusEquipos: false
  }

  loadEquipos = () => {
    let url = Global.urlApiApuestas;
    let request = "api/Equipos";
    axios.get(url + request).then((response) => {
      this.setState({
        equipos: response.data,
        statusEquipos: true
      });
    });
  }

  componentDidMount = () => {
    this.loadEquipos();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark"
        data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fw-bold"
            to="/">
            Champions</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/hospitales">
                  Hospitales (por la cara)</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/apuestas">
                  Apuestas</NavLink>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Equipos
                </span>
                <ul className="dropdown-menu">
                  {
                    this.state.statusEquipos &&
                    (
                      this.state.equipos.map((e, index) => {
                        return (
                          <li key={index}>
                            <NavLink
                              className="dropdown-item"
                              to={"/equipo/" + e.idEquipo}>
                              {e.nombre}
                            </NavLink>
                          </li>
                        );
                      })
                    )
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
