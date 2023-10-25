import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink, Navigate } from 'react-router-dom'

export default class DeleteDepartamento extends Component {
    state = {
        status: false
    }

    deleteDepartamento = () => {
        let url = Global.urlApiDept;
        let request = "api/Departamentos/" + this.props.iddepartamento;
        axios.delete(url + request).then((response) => {
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
                <div className='container-fluid mt-3 text-center'>
                    <h1>Eliminar departamento {this.props.iddepartamento}</h1>
                    <h3>Va a borrar este departamento. ¿Está seguro de ello?</h3>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <button
                                className='btn btn-warning w-100'
                                onClick={() => this.deleteDepartamento()}>
                                Aceptar
                            </button>
                        </div>
                        <div className='col-6'>
                            <NavLink
                                className="btn btn-secondary w-100"
                                to="/">
                                Cancelar</NavLink>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
