import React, { Component } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
import championsImage from "../assets/images/champions.png"

export default class Menu extends Component {
  cajaBuscar = React.createRef();

  state = {
    equipos: [],
    statusEquipos: false,
    statusSearch: false
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

  searchJugadores = (event) => {
    event.preventDefault();
    this.setState({
      statusSearch: true
    })
  }

  componentDidMount = () => {
    this.loadEquipos();
  }

  componentDidUpdate = () => {
    if (this.state.statusSearch) {
      this.setState({
        statusSearch: false
      });
    }
  }

  render() {
    if (this.state.statusSearch) {
      return (<Navigate to={"/search/" + this.cajaBuscar.current.value} />);
    } else {
      return (
        <nav className="navbar navbar-expand-md bg-primary"
          data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand fw-bold"
              to="/">
              <img
                src={championsImage}
                alt=""
                width="30"
                className="d-inline-block align-text-top me-3"></img>
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
            <form className='d-flex'>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Buscar jugadores"
                ref={this.cajaBuscar} />
              <button
                className="btn btn-success"
                onClick={this.searchJugadores}>
                Buscar</button>
            </form>
          </div>
        </nav>
      );
    }
  }
}
