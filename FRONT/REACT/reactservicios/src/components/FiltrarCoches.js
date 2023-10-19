import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class FiltrarCoches extends Component {
    urlApi = Global.urlApiCoches
    cajaMarca = React.createRef();

    state = {
        coches: []
    }

    filtrarPorMarca = (event) => {
        event.preventDefault();
        let marca = this.cajaMarca.current.value;
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
        })

    }

    componentDidMount = () => {
        let request = "webresources/coches";
        axios.get(this.urlApi + request).then((response) => {
            this.setState({
                coches: response.data
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Filtrar Coches por Marca</h1>
                <form onSubmit={this.filtrarPorMarca}>
                    <label>Marca</label><br />
                    <input ref={this.cajaMarca} type="text" />
                    <button>Filtrar coches</button>
                </form>
                <table border="1">
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td>{coche.idcoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img src={coche.imagen} alt=""
                                        style={{ width: "150px", height: "150px" }} /></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
