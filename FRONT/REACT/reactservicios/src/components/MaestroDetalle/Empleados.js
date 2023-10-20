import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global'

export default class Empleados extends Component {
    state = {
        emple: [],
        statusEmple: false
    }

    loadEmple = () => {
        if (this.statusEmple) {
            this.setState({
                statusEmple: false
            });
        }
        let idDept = this.props.idDept;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDept;
        axios.get(Global.urlApiEmple + request).then((response) => {
            this.setState({
                emple: response.data,
                statusEmple: true
            });
        });
    }

    componentDidUpdate = () => {
        this.loadEmple();
    }

    componentDidMount = () => {
        this.loadEmple();
    }

    render() {
        return (
            <div>
                <h1>Empleados de {this.props.idDept}</h1>
                {
                    this.state.statusEmple &&
                    (
                        <table border="1">
                            <thead style={{
                                fontWeight: "bold", textAlign: "center"
                            }}>
                                <tr>
                                    <td>ID</td>
                                    <td>Apellido</td>
                                    <td>Oficio</td>
                                    <td>Salario</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.emple.map((emple, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{emple.idEmpleado}</td>
                                                <td>{emple.apellido}</td>
                                                <td>{emple.oficio}</td>
                                                <td>{emple.salario}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div >
        );
    }
}
