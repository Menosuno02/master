import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cine">Cine</a>
                    </li>
                    <li>
                        <a href="/musica">Música</a>
                    </li>
                    <li>
                        <a href="/ejemploform">FormSimple</a>
                    </li>
                    <li>
                        <a href="/collatz">Collatz</a>
                    </li>
                    <li>
                        <a href="/tablamult">Tabla Multiplicar</a>
                    </li>
                    <li>
                        <a href="/tablamult_v2">Tabla Multiplicar (V2)</a>
                    </li>
                    <li>
                        <a href="/selectmult">Selección Múltiple</a>
                    </li>
                </ul>
            </div>
        )
    }
}
