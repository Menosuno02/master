import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        departamento: {},
        statusGet: false,
        statusUpdate: false
    }

    findDepartamento = () => {
        let url = Global.urlApiDept;
        let request = "api/Departamentos/" + this.props.iddepartamento;
        axios.get(url + request).then((response) => {
            this.setState({
                departamento: response.data,
                statusGet: true
            });
        });
    }

    updateDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        let url = Global.urlApiDept;
        let request = "api/Departamentos";
        axios.put(url + request, departamento).then((response) => {
            this.setState({
                statusUpdate: true
            });
        });
    }

    componentDidMount = () => {
        this.findDepartamento();
    }

    render() {
        if (this.state.statusUpdate)
            return (<Navigate to="/" />);
        else {
            return (
                <div className='container-fluid mt-3'>
                    <h1>
                        Modificar departamento {this.props.iddepartamento}
                    </h1>
                    {
                        this.state.statusGet &&
                        (
                            <form>
                                <div className="mt-3">
                                    <label className='form-label'>Número</label>
                                    <input
                                        ref={this.cajaNumero}
                                        className='form-control'
                                        type="number"
                                        disabled
                                        value={this.state.departamento.numero} />
                                </div>
                                <div className="mt-3">
                                    <label className='form-label'>Nombre</label>
                                    <input
                                        ref={this.cajaNombre}
                                        className='form-control'
                                        type="text"
                                        defaultValue={this.state.departamento.nombre} />
                                </div>
                                <div className="mt-3">
                                    <label className='form-label'>Localidad</label>
                                    <input
                                        ref={this.cajaLocalidad}
                                        className='form-control'
                                        type="text"
                                        defaultValue={this.state.departamento.localidad} />
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <button
                                            className='btn btn-primary w-100'
                                            onClick={this.updateDepartamento}>
                                            Modificar
                                        </button>
                                    </div>
                                    <div className='col-6'>
                                        <NavLink
                                            className="btn btn-secondary w-100"
                                            to="/">Cancelar</NavLink>
                                    </div>
                                </div>
                            </form>
                        )
                    }
                </div>
            );
        }
    }
}
