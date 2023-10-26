import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaMadrid = React.createRef();
    cajaBarça = React.createRef();
    cajaFecha = React.createRef();
    fecha = "";

    state = {
        didMount: false,
        statusApuesta: false
    }

    createApuesta = (event) => {
        event.preventDefault();
        let resultado = this.cajaMadrid.current.value
            + "-" + this.cajaBarça.current.value
        let apuesta = {
            idApuesta: 1,
            usuario: this.cajaUsuario.current.value,
            resultado: resultado,
            fecha: this.cajaFecha.current.value
        }
        let url = Global.urlApiApuestas;
        let request = "api/Apuestas";
        axios.post(url + request, apuesta).then((response) => {
            this.setState({
                statusApuesta: true
            });
        });
    }

    componentDidMount = () => {
        let fecha = new Date();
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let anyo = fecha.getFullYear();
        this.fecha = (dia + "/" + mes + "/" + anyo);
        this.setState({
            didMount: true
        });
    }

    render() {
        if (this.state.statusApuesta)
            return (<Navigate to="/apuestas" />);
        else if (this.state.didMount) {
            return (
                <div className='container-fluid mt-3'>
                    <h1>Nueva apuesta</h1>
                    <form>
                        <div className='mt-3'>
                            <label className='form-label'>
                                Usuario
                            </label>
                            <input
                                type='text'
                                ref={this.cajaUsuario}
                                className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                Real Madrid
                            </label>
                            <input
                                type='text'
                                ref={this.cajaMadrid}
                                className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                Barcelona
                            </label>
                            <input
                                type='text'
                                ref={this.cajaBarça}
                                className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                Fecha
                            </label>
                            <input
                                type='text'
                                ref={this.cajaFecha}
                                defaultValue={this.fecha}
                                disabled
                                className='form-control' />
                        </div>
                        <button
                            className='btn btn-primary mt-3 w-100'
                            onClick={this.createApuesta}>
                            Nueva apuesta</button>
                    </form>
                </div>
            );
        }
    }
}
