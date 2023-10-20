import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTabla = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        for (let i = 1; i <= 10; i++)
            aux.push(num * i);
        this.setState({
            tabla: aux
        });
    }

    componentDidMount = () => {
        this.generarTabla();
    }

    render() {
        return (
            <div>
                <h1>Tabla Multiplicar Router</h1>
                <h2 style={{ color: "purple" }}>Número: {this.props.numero}</h2>
                <ul>
                    {
                        this.state.tabla.map((num, index) => {
                            return (
                                <li key={index}>{num}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
