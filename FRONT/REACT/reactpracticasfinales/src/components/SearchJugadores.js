import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';

export default class SearchJugadores extends Component {
  state = {
    jugadores: [],
    statusJugadores: false
  }

  searchJugadores = () => {
    let url = Global.urlApiApuestas;
    let request = "api/Jugadores/BuscarJugadores/" +
      this.props.queryBuscar;
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
    if (this.props.queryBuscar !== oldProps.queryBuscar)
      this.searchJugadores();
  }

  render() {
    if (!this.state.statusJugadores)
      return (<img alt="" className='d-block mx-auto'
        src={loadingImage} />);
    else {
      return (
        <div className='container-fluid mt-3'>
          <h1>Búsqueda de jugadores</h1>
          <hr className='border border-primary opacity-100' />
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
                        <img
                          className='img-fluid'
                          width="75"
                          alt=""
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
