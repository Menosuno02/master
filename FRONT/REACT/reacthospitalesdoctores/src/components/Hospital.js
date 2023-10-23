import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';

export default class Hospital extends Component {
    state = {
        doctores: [],
        statusDoctores: false,
        doctor: {},
        statusDetalles: false
    }

    getDoctores = () => {
        let url = Global.urlApiDoctores;
        let request = "api/Doctores/DoctoresHospital/" + this.props.idhospital;
        axios.get(url + request).then((response) => {
            this.setState({
                doctores: response.data,
                statusDoctores: true
            });
        });
    }

    getDetalles = (id) => {
        let url = Global.urlApiDoctores;
        let request = "api/Doctores/" + id
        axios.get(url + request).then((response) => {
            this.setState({
                doctor: response.data,
                statusDetalles: true
            });
        });
    }

    componentDidMount = () => {
        this.getDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital !== this.props.idhospital)
            this.getDoctores();
    }

    render() {
        return (
            <div>
                <br />
                <h1>Hospital {this.props.idhospital}</h1>
                <hr className="border border-primary opacity-100" />
                {
                    this.state.statusDoctores &&
                    (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Apellido</th>
                                    <th>Especialidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctores.map((doctor, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{doctor.apellido}</td>
                                                <td>{doctor.especialidad}</td>
                                                <button
                                                    onClick={() => this.getDetalles(doctor.idDoctor)}>
                                                    Detalles
                                                </button>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
                {
                    this.state.statusDetalles &&
                    (
                        <div>
                            <DetallesDoctor doctor={this.state.doctor} />
                        </div>
                    )
                }
            </div >
        );
    }
}
