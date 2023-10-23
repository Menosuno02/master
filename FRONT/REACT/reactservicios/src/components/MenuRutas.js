import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuLista extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/customers">Customers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/customers_buscar">Buscar Customers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coches">Filtrar Coches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deptemple">Empleados por Dept</NavLink>
                    </li>
                    <li>
                        <NavLink to="/oficioemple">Empleados por Oficio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dept">Dept (child Empleados)</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
