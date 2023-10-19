import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosDept extends Component {
    selectRef = React.createRef();

    state = {
        dept: [],
        emple: [],
        statusDept: false,
        statusEmple: false
    }

    findEmple = (event) => {
        event.preventDefault();
        let idDept = this.selectRef.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDept;
        axios.get(Global.urlApiEmple + request).then((response) => {
            this.setState({
                emple: response.data,
                statusEmple: true
            });
        });
    }

    loadDept = () => {
        axios.get(Global.urlApiDept).then((response) => {
            this.setState({
                dept: response.data,
                statusDept: true
            });
        });
    }

    componentWillMount = () => {
        this.loadDept();
    }

    render() {
        return (
            <div>
                <h1>Empleados por Departamento</h1>
                <form onSubmit={this.findEmple}>
                    <label>Seleccione un departamento</label><br />
                    <select ref={this.selectRef}>
                        {
                            this.state.statusDept &&
                            (
                                this.state.dept.map((dept, index) => {
                                    return (
                                        <option key={index}
                                            value={dept.Numero}>
                                            {dept.Nombre}</option>
                                    );
                                })
                            )
                        }
                    </select>
                    <button>Visualizar empleados</button>
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
                                    <td>Apellido</td>
                                    <td>Oficio</td>
                                    <td>Salario</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.emple.map((emple, index) => {
                                        return (<tr key={index}>
                                            <td>{emple.apellido}</td>
                                            <td>{emple.oficio}</td>
                                            <td>{emple.salario}</td>
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        );
    }
}
