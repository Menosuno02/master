import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        statusApuestas: false
    }

    loadApuestas = () => {
        let url = Global.urlApiApuestas;
        let request = "api/Apuestas";
        axios.get(url + request).then((response) => {
            this.setState({
                apuestas: response.data,
                statusApuestas: true
            });
        });
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        if (!this.state.statusApuestas)
            return (<img src={loadingImage}
                alt="" className='d-block mx-auto' />);
        else {
            return (
                <div className='container-fluid mt-3'>
                    <h1>Apuestas</h1>
                    <hr className='border border-primary opacity-100' />
                    <NavLink
                        to="/create_apuesta"
                        className="btn btn-danger w-100">
                        Realizar apuesta
                    </NavLink>
                    <h2 className='text-primary fw-bold mt-4 text-center'>
                        Madrid - Barça
                    </h2>
                    <table className='table'>
                        <thead className='border-primary'>
                            <tr>
                                <th>Usuario</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.apuestas.map((apuesta, index) => {
                                    return (
                                        <tr>
                                            <td>{apuesta.usuario}</td>
                                            <td>{apuesta.resultado}</td>
                                            <td>{apuesta.fecha}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
