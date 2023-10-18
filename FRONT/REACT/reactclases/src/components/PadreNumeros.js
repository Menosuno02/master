import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {
    state = {
        suma: 0,
        numeros: [parseInt(Math.random() * 100) + 1]
    }

    anyadirNum = () => {
        this.state.numeros.push(parseInt(Math.random() * 100) + 1);
        this.setState({
            numeros: this.state.numeros
        });
    }

    sumarNum = (num) => {
        this.setState({
            suma: this.state.suma + num
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>La suma es {this.state.suma}</h1>
                <button onClick={() => this.anyadirNum()}>Nuevo número</button>
                {
                    this.state.numeros.map((num, index) => {
                        return (<HijoNumero numero={num} key={index} sumarNum={this.sumarNum} />)
                    })
                }
                <hr />
            </div>
        );
    }
}

export default PadreNumeros;