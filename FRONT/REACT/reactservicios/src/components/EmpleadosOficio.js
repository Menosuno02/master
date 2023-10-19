import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficio extends Component {
    selectRef = React.createRef();

    state = {
        oficios: [],
        emple: [],
        statusOficios: false,
        statusEmple: false
    }

    findEmple = (event) => {
        event.preventDefault();
        let request = "api/Empleados/EmpleadosOficio/"
            + this.selectRef.current.value;
        axios.get(Global.urlApiEmple + request).then((response) => {
            console.log(response.data)
            this.setState({
                emple: response.data,
                statusEmple: true
            })
        });
    }

    loadOficios = () => {
        let request = "api/Empleados/oficios";
        axios.get(Global.urlApiEmple + request).then((response) => {
            this.setState({
                oficios: response.data,
                statusOficios: true
            });
        });
    }

    componentWillMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <div>
                <h1>Oficios y Empleados</h1>
                <form onSubmit={this.findEmple}>
                    <label>Selecciona un oficio</label><br />
                    <select ref={this.selectRef}>
                        {
                            this.state.statusOficios &&
                            (
                                this.state.oficios.map((oficio, index) => {
                                    return (
                                        <option key={index}
                                            value={oficio}>{oficio}
                                        </option>
                                    );
                                })
                            )
                        }
                    </select>
                    <button>Buscar empleados</button>
                </form><br />
                {
                    this.state.statusEmple &&
                    (
                        <table border="1">
                            <thead style={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                                <tr>
                                    <td>ID</td>
                                    <td>Apellido</td>
                                    <td>Salario</td>
                                    <td>Departamento</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.emple.map((emple, index) => {
                                        return (<tr key={index}>
                                            <td>{emple.idEmpleado}</td>
                                            <td>{emple.apellido}</td>
                                            <td>{emple.salario}</td>
                                            <td>{emple.departamento}</td>
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
