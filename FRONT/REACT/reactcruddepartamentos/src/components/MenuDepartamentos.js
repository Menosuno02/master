import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import homeImage from "../assets/images/home.jpg"

export default class MenuDepartamentos extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={homeImage}
                        alt="Logo"
                        width="35"
                        height="30"
                        className="d-inline-block align-text-top me-2" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link"
                                to="/">Home</NavLink>
                            <NavLink className="nav-link"
                                to="/create">Create</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
