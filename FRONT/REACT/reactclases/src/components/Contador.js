import { Component } from "react"

// Métodos fuera del component con  function, no podemos usar nada de la clase en ellos
function metodoExterno() {
    console.log("Función externa a la clase")
}

class Contador extends Component {
    // No se utiliza var, let, const
    numero = 0;
    incrementarNum = () => {
        this.numero++;
        console.log("Valor del número: " + this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio) // props funcionan igual
    }

    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        }); // cambiar variables state con this.setState
    }

    render() {
        return (
            <div>
                <h1>Class Component Contador</h1>
                <h2>Valor inicial: {this.props.inicio}</h2>
                <h2 style={{ color: "blue" }}>Valor contador: {this.state.valor}</h2>
                <button onClick={this.incrementarValor}>Incrementar contador</button>
                <button onClick={() => {
                    this.incrementarNum();
                    metodoExterno(); // sin this al ser externo a la clase
                }}>Incrementar número (función anónima)</button>
                <hr />
            </div>
        );
    }
}

export default Contador;