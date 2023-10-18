import React, { Component } from 'react'

let numAleatorios = []
const generarNumeros = () => {
    for (let i = 0; i <= 10; i++)
        numAleatorios.push(parseInt(Math.random() * 100) + 1);
}
generarNumeros();

export default class TablaMultV2 extends Component {
    select = React.createRef();

    state = {
        multiplos: []
    }

    peticionForm = (event) => {
        event.preventDefault();
        let num = this.select.current.value;
        let mult = [];
        for (let i = 1; i <= 10; i++)
            mult.push(num * i);
        this.setState({
            multiplos: mult
        });
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar (versión 2)</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Selecciona un número</label><br />
                    <select ref={this.select}
                        onChange={this.peticionForm}>
                        {
                            numAleatorios.map((num, index) => {
                                return (<option key={index} value={num}>{num}</option>);
                            })
                        }
                    </select>
                    <button>Multiplicar</button>
                </form>
                <table>
                    <tbody>
                        {
                            this.state.multiplos.map((num, index) => {
                                return (<tr key={index}>
                                    <td>{this.select.current.value}*{index + 1}</td>
                                    <td>{num}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
