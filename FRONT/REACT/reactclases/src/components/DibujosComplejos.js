import { Component } from "react";

class DibujosComplejos extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 0; i < 11; i++) {
            let num = parseInt(Math.random() * 100) + 1;
            lista.push(<li key={i}>{num}</li>)
        }
        return lista;
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "green" }}>Dibujos Complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
                <hr />
            </div>
        );
    }
}

export default DibujosComplejos;