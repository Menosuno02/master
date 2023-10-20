import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import Empleados from './Empleados';

export default class Departamentos extends Component {
    selectDept = React.createRef();

    state = {
        dept: [],
        statusDept: false,
        idDept: -1
    }

    loadDept = () => {
        axios.get(Global.urlApiDept).then((response) => {
            this.setState({
                dept: response.data,
                statusDept: true
            });
        });
    }

    changeDept = (event) => {
        event.preventDefault();
        this.setState({
            idDept: this.selectDept.current.value
        });
    }

    componentDidMount = () => {
        this.loadDept();
    }

    render() {
        return (
            <div>
                <h1>Departamentos</h1>
                <form onSubmit={this.changeDept}>
                    <label>Seleccione un departamento</label><br />
                    <select ref={this.selectDept}>
                        {
                            this.state.statusDept &&
                            (
                                this.state.dept.map((dept, index) => {
                                    return (
                                        <option key={index}
                                            value={dept.Numero}>{dept.Nombre}
                                        </option>
                                    );
                                })
                            )
                        }
                    </select>
                    <button>Buscar empleados</button>

                </form>
                {
                    this.state.idDept !== -1 &&
                    (
                        <div>
                            <h2 style={{ color: "red" }}>Departamento seleccionado: {this.state.idDept}</h2>
                            <Empleados idDept={this.state.idDept} />
                        </div>
                    )
                }
            </div>
        );
    }
}
