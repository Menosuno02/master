import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import loadingImage from "../assets/images/loading.gif"

export default class Equipo extends Component {

  state = {
    equipo: {},
    statusEquipo: false
  }

  getEquipo = () => {
    let url = Global.urlApiApuestas;
    let request = "api/Equipos/" + this.props.idequipo;
    axios.get(url + request).then((response) => {
      this.setState({
        equipo: response.data,
        statusEquipo: true
      })
    })
  }

  componentDidMount = () => {
    this.getEquipo();
  }

  componentDidUpdate = (oldProps) => {
    if (this.props.idequipo !== oldProps.idequipo)
      this.getEquipo();
  }

  render() {
    if (!this.state.statusEquipo)
      return (<img src={loadingImage} alt=""
        className='d-block mx-auto' />)
    else {
      return (
        <div className='container-fluid mt-3'>
          <div className='card text-center'>
            <div className='card-header'>
              {this.state.equipo.nombre}
            </div>
            <div className='card-body text-center'>
              <img className='img-fluid mb-3' alt="" width="200"
                src={this.state.equipo.imagen} />
              <h5 className='card-title'>
                Champions: {this.state.equipo.champions}
              </h5>
              <p className='card-text'>{this.state.equipo.descripcion}</p>
              <NavLink
                className="btn btn-success"
                to={"/jugadores/" + this.props.idequipo}>
                Jugadores</NavLink>
              <NavLink
                className="btn btn-primary"
                to="/">
                Volver</NavLink>
            </div>
          </div>
        </div>
      );
    }
  }
}
