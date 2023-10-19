import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class FiltrarCoches extends Component {
    urlApi = Global.urlApiCoches
    cajaMarca = React.createRef();

    state = {
        coches: [],
        status: false
        // También se puede hacer con otro array filtrados en state
        // y con solo una petición
    }

    filtrarPorMarca = (event) => {
        event.preventDefault();
        let marca = this.cajaMarca.current.value.toUpperCase();
        let aux = [];
        let request = "webresources/coches";
        axios.get(this.urlApi + request).then((response) => {
            if (marca === "") aux = response.data;
            else {
                for (let coche of response.data)
                    if (coche.marca === marca) aux.push(coche);
            }
            this.setState({
                coches: aux
            });
        });

        /* Segunda forma, con Array.filter (lamda function)
        axios.get(this.urlApi + request).then((response) => {
            aux = response.data;
            aux.filter((objeto) =>
                objeto.marca === marca
            );
            this.setState({
                coches: aux
            });
        });
        */
    }

    loadCoches = (event) => {
        if (event != null)
            event.preventDefault();
        let request = "webresources/coches";
        axios.get(this.urlApi + request).then((response) => {
            this.setState({
                coches: response.data,
                status: true
            });
        });
    }

    componentWillMount = () => {
        this.loadCoches();
    }

    render() {
        return (
            <div>
                <h1>Filtrar Coches por Marca</h1>
                <form>
                    <label>Marca</label><br />
                    <input ref={this.cajaMarca} type="text" />
                    <button onClick={this.filtrarPorMarca}>Filtrar</button>
                    <button onClick={this.loadCoches}>Buscar All</button>
                </form>
                <table border="1">
                    <tbody>
                        {
                            this.state.status &&
                            (
                                this.state.coches.map((coche, index) => {
                                    return (<tr key={index}>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>{coche.conductor}</td>
                                        <td><img src={coche.imagen} alt=""
                                            style={{
                                                width: "100px",
                                                height: "100px"
                                            }} /></td>
                                    </tr>)
                                })
                            )

                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
