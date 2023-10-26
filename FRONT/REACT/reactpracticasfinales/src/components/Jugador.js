import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';

export default class Jugador extends Component {
    state = {
        jugador: {},
        statusJugador: false
    }

    loadJugador = () => {
        let url = Global.urlApiApuestas;
        let request = "api/Jugadores/" + this.props.idjugador;
        axios.get(url + request).then((response) => {
            this.setState({
                jugador: response.data,
                statusJugador: true
            });
        });
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idjugador !== oldProps.idjugador)
            this.loadJugador();
    }

    render() {
        if (!this.state.statusJugador)
            return (<img src={loadingImage} alt=""
                className='d-block mx-auto' />);
        else {
            return (
                <div className='container-fluid mt-3'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            {this.state.jugador.nombre}
                        </div>
                        <div className='card-body'>
                            <img className='img-fluid mb-2'
                                alt="" src={this.state.jugador.imagen} />
                            <h5 className='card-title'>
                                {this.state.jugador.posicion}
                            </h5>
                            <p className='card-text'>
                                Fecha nacimiento: {this.state.jugador.fechaNacimiento}
                            </p>
                            <p className='card-text'>
                                País: {this.state.jugador.pais}
                            </p>
                            <NavLink className="btn btn-success"
                                to={"/jugadores/" + this.state.jugador.idEquipo}>
                                Volver a jugadores
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
