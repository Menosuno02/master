import { Component } from "react";

class HijoDeporte extends Component {
    seleccionarFav = () => {
        this.props.mostrarFavorito(this.props.nombre);
    }

    render() {
        return (
            <div>
                <h2 style={{ color: "orange" }}>{this.props.nombre}</h2>
                <button onClick={() => this.seleccionarFav()}>Seleccionar favorito</button>
            </div>
        );
    }
}

export default HijoDeporte;