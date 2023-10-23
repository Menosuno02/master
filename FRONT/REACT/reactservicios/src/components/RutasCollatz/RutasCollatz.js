import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class RutasCollatz extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home (rutas parámetros)</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tablamult/7">Tabla Multiplicar del 7</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tablamult/41">Tabla Multiplicar del 41</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/noexisto">Ruta no mapeada (error)</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/collatz/6">Collatz de 6</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/collatz/30">Collatz de 30</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
