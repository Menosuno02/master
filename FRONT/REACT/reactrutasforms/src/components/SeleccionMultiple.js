import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();

    generarOptions = () => {
        let options = [];
        for (let i = 0; i <= 10; i++)
            options.push(<option key={i} value={"Elemento " + i}>{"Elemento " + i}</option>);
        return options;
    }

    state = {
        seleccionados: ""
    }

    mostrarSeleccionados = (event) => {
        event.preventDefault();
        let options = this.selectMultiple.current.options;
        let datos = "";
        for (let option of options) // (let option in options) recorre cada índice
            if (option.selected) datos += option.value + ", ";
        this.setState({
            seleccionados: datos
        });
    }

    render() {
        return (
            <div>
                <h1>Selección múltiple</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Selecciona elementos</label>
                    <select ref={this.selectMultiple} size="10" multiple>
                        {this.generarOptions()}
                    </select>
                    <button>Mostrar selección</button>
                </form>
                <h1 style={{ color: "green" }}>{this.state.seleccionados}</h1>
            </div>
        );
    }
}
