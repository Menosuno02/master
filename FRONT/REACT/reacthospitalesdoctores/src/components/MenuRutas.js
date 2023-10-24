import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
    state = {
        hospitales: [],
        statusHospitales: false
    }

    getHosp = () => {
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
        this.getHosp();
    }

    componentDidUpdate = () => {
        this.getHosp();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <li className='nav-item'>
                                    <NavLink className="nav-link"
                                        to="/">
                                        Página principal</NavLink>
                                </li>
                                <NavLink to="/"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Hospitales
                                </NavLink>

                                <ul className="dropdown-menu">
                                    {
                                        this.state.statusHospitales &&
                                        (
                                            this.state.hospitales.map((hospital, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink
                                                            className="dropdown-item"
                                                            to={"/hospital/" + hospital.idhospital}>
                                                            {hospital.nombre}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })
                                        )
                                    }
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link"
                                    to="/create_hospital">
                                    Crear hospital</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/hospitales">
                                    Lista hospitales
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        );
    }
}
