import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
    deportes = ["Fútbol", "Baloncesto", "Balonmano", "Beísbol"];

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporte) => {
        this.setState({
            favorito: deporte
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Padre Deportes</h1>
                <h2 style={{ backgroundColor: "yellow" }}>Deporte favorito: {this.state.favorito}</h2>
                {
                    this.deportes.map((deporte, index) => {
                        return (<HijoDeporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito} />);
                    })
                }
                <hr />
            </div>
        );
    }
}

export default PadreDeportes;