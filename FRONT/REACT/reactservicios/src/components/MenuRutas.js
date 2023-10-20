import React, { Component } from 'react'

export default class MenuLista extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/customers">Customers</a>
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
                        <a href="/dept">Departamentos (child Empleados)</a>
                    </li>
                    <br />
                    <li>
                        <a href="/">Home (Rutas Parámetros)</a>
                    </li>
                    <li>
                        <a href="/tablamult/7">Tabla Multiplicar del 7</a>
                    </li>
                    <li>
                        <a href="/tablamult/41">Tabla Multiplicar del 41</a>
                    </li>
                    <li>
                        <a href="/noexisto">Ruta no mapeada (error)</a>
                    </li>
                </ul>
            </div>
        )
    }
}
