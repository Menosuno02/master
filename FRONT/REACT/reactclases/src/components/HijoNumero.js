import { Component } from "react";

class HijoNumero extends Component {
    suma = () => {
        this.props.sumarNum(parseInt(this.props.numero))
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Número hijo: {this.props.numero}</h1>
                <button onClick={() => this.suma()}>Sumar {this.props.numero}</button>
            </div>
        );
    }
}

export default HijoNumero;