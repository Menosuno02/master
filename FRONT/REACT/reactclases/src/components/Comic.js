import { Component } from "react";

class Comic extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: "red" }}>{this.props.comic.titulo}</h2>
                <h3>{this.props.comic.descripcion}</h3>
                <img src={this.props.comic.imagen}
                    style={{ width: "150px", height: "150px" }} alt="" /><br />
                <button onClick={() => {
                    this.props.selectFav(this.props.comic)
                }}>Seleccionar favorito</button>
            </div>
        );
    }
}

export default Comic;