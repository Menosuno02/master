import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ListaHospitales extends Component {
    state = {
        hospitales: [],
        statusHospitales: false
    }

    loadHospitales = () => {
        let url = Global.urlApiHospitales;
        let request = "webresources/hospitales";
        axios.get(url + request).then((response) => {
            this.setState({
                hospitales: response.data,
                statusHospitales: true
            });
        });
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    componentDidUpdate = () => {
        this.loadHospitales();
    }

    render() {
        return (
            <div className='container-fluid mt-3'>
                <h1>Lista Hospitales</h1>
                <hr className="border border-primary opacity-100" />
                {
                    this.state.statusHospitales &&
                    (
                        <table className="table">
                            <thead className="border-primary">
                                <tr>
                                    <th>ID Hospital</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Camas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.hospitales.map((hospital, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{hospital.idhospital}</td>
                                                <td>{hospital.nombre}</td>
                                                <td>{hospital.direccion}</td>
                                                <td>{hospital.telefono}</td>
                                                <td>{hospital.camas}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        );
    }
}
