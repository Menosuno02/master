import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Hospital extends Component {
    state = {
        doctores: [],
        statusDoctores: false
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
                                    <th>ID</th>
                                    <th>Apellido</th>
                                    <th>Especialidad</th>
                                    <th>Salario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctores.map((doctor, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{doctor.idDoctor}</td>
                                                <td>{doctor.apellido}</td>
                                                <td>{doctor.especialidad}</td>
                                                <td>{doctor.salario}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div >
        );
    }
}
