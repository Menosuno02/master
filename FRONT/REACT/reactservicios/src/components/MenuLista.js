import React, { Component } from 'react'

export default class MenuLista extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Customers</a>
                    </li>
                    <li>
                        <a href="/customers_buscar">Buscar Customers</a>
                    </li>
                    <li>
                        <a href="/coches">Filtrar Coches</a>
                    </li>
                    <li>
                        <a href="/deptemple">Empleados por Dept</a>
                    </li>
                    <li>
                        <a href="/oficioemple">Empleados por Oficio</a>
                    </li>
                    <li>
                        <a href="/dept">Departamentos (con child Empleados)</a>
                    </li>
                </ul>
            </div>
        )
    }
}
