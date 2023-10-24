import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    cajaNum = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNum.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        let url = Global.urlApiDept;
        let request = "api/Departamentos";
        axios.post(url + request, departamento).then((response) => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status)
            return (<Navigate to="/" />);
        else {
            return (
                <div className='container-fluid mt-3'>
                    <h1>Crear Departamento</h1>
                    <form onSubmit={this.insertDepartamento}
                        className="mt-3 d-block mx-auto w-50">
                        <div className='mb-3'>
                            <label className='form-label'>
                                Número Dept
                            </label>
                            <input ref={this.cajaNum}
                                className='form-control' type="number" />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Nombre
                            </label>
                            <input ref={this.cajaNombre}
                                className='form-control' type="text" />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Localidad
                            </label>
                            <input ref={this.cajaLocalidad}
                                className='form-control' type="text" />
                        </div>
                        <button className='btn btn-primary d-block mx-auto'>
                            Crear departamento
                        </button>
                    </form>
                </div>
            );
        }
    }
}
