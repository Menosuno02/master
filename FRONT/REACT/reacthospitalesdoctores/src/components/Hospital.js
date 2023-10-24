import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';
import { NavLink } from 'react-router-dom';

export default class Hospital extends Component {
    state = {
        doctores: [],
        statusDoctores: false,
        iddoctor: null
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
        this.setState({
            iddoctor: id
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
            <div className="container-fluid">
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
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctores.map((doctor, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{doctor.apellido}</td>
                                                <td>{doctor.especialidad}</td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm me-1'
                                                        onClick={() =>
                                                            this.getDetalles(doctor.idDoctor)}>
                                                        Detalles
                                                    </button>
                                                    <NavLink
                                                        className="btn btn-primary btn-sm"
                                                        to={"/hospital/" + this.props.idhospital + "/" + doctor.idDoctor}>Detalles (NavLink)
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
                {
                    this.state.iddoctor != null &&
                    (
                        <DetallesDoctor
                            idhospital={this.props.idhospital}
                            iddoctor={this.state.iddoctor}
                        />
                    )
                }
            </div>
        );
    }
}
