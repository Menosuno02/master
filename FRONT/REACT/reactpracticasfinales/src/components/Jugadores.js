import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {
  state = {
    jugadores: [],
    statusJugadores: false
  }

  searchJugadores = () => {
    let url = Global.urlApiApuestas;
    let request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo;
    axios.get(url + request).then((response) => {
      this.setState({
        jugadores: response.data,
        statusJugadores: true
      });
    });
  }

  componentDidMount = () => {
    this.searchJugadores();
  }

  componentDidUpdate = (oldProps) => {
    if (this.props.idequipo !== oldProps.idequipo)
      this.searchJugadores();
  }

  render() {
    if (!this.state.statusJugadores)
      return (<img src={loadingImage} alt=""
        className='d-block mx-auto' />)
    else {
      return (
        <div className='container-fluid mt-3'>
          <h1>Jugadores del equipo</h1>
          <hr className='border border-primary opacity-100' />
          <NavLink
            to={"/equipo/" + this.props.idequipo}
            className="btn btn-success w-100 my-2">
            Volver a equipo
          </NavLink>
          <table className='table'>
            <thead className='border-primary'>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.jugadores.map((jugador, index) => {
                  return (
                    <tr key={index}>
                      <td>{jugador.nombre}</td>
                      <td>
                        <img alt=""
                          width="75"
                          src={jugador.imagen} />
                      </td>
                      <td>
                        <NavLink
                          to={"/jugador/" + jugador.idJugador}
                          className="btn btn-primary">
                          Detalles
                        </NavLink>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      );
    }
  }
}
