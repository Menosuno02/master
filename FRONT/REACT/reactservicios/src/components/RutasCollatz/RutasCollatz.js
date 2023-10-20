import React, { Component } from 'react'

export default class RutasCollatz extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/collatz/6">Collatz de 6</a>
                    </li>
                    <li>
                        <a href="/collatz/30">Collatz de 30</a>
                    </li>
                </ul>
            </div>
        )
    }
}
