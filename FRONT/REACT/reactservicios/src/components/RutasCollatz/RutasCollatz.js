import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class RutasCollatz extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home (rutas parámetros)</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tablamult/7">Tabla Multiplicar del 7</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tablamult/41">Tabla Multiplicar del 41</NavLink>
                    </li>
                    <li>
                        <NavLink to="/noexisto">Ruta no mapeada (error)</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/6">Collatz de 6</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/30">Collatz de 30</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
