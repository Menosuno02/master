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
                </ul>
            </div>
        )
    }
}
