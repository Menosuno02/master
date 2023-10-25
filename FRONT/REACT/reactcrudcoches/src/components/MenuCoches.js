import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuCoches extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark">
                <div className="container-fluid">
                    <span className='navbar-brand'>CRUD Coches</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/create">Crear</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
