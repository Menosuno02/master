import React, { Component } from 'react'

export default class TablaMult extends Component {
    cajaNum = React.createRef();

    state = {
        multiplos: []
    }

    peticionForm = (event) => {
        event.preventDefault();
        let num = parseInt(this.cajaNum.current.value);
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
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Introduce un número</label><br />
                    <input ref={this.cajaNum} type="number" />
                    <button>Sacar tabla</button>
                </form>
                <table>
                    <tbody>
                        {
                            this.state.multiplos.map((num, index) => {
                                return (<tr key={index}>
                                    <td>{this.cajaNum.current.value}*{index + 1}</td>
                                    <td>{num}</td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
