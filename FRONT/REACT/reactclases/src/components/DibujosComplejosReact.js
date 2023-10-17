import { Component } from "react";

class DibujosComplejosReact extends Component {
    state = {
        nombres: ["Antonio", "Lucía", "Fernando", "Rosa", "Luna", "Julio"]
    }

    generarNombre = () => {
        this.state.nombres.push("Andrés");
        this.setState({
            nombres: this.state.nombres
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "brown" }}>Dibujos Complejos React</h1>
                {
                    this.state.nombres.map((nombre, index) => {
                        return (<h3 style={{ color: "red" }} key={index}>{nombre}</h3>);
                    })
                }
                <button onClick={() => this.generarNombre()}>Generar nuevo nombre</button>
            </div>
        );
    }
}

export default DibujosComplejosReact;