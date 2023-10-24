import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetalleDepartamento extends Component {
    /*
    state = {
        departamento: {},
        status: false
    }


    findDept = () => {
        let url = Global.urlApiDept;
        let request = "api/Departamentos/" + this.props.iddepartamento;
        axios.get(url + request).then((response) => {
            this.setState({
                departamento: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.findDept();
    }
    */

    render() {
        return (
            <div className="container-fluid mt-3">
                <h1>Departamento {this.props.iddepartamento}</h1>
                <hr className='border border-primary opacity-100' />
                <form className='mt-3'>
                    <div className='mb-3'>
                        <label className='form-label'>Número</label>
                        <input className="form-control"
                            type="text" disabled
                            value={this.props.iddepartamento} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input className="form-control"
                            type="text" disabled
                            value={this.props.nombre} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Localidad</label>
                        <input className="form-control"
                            type="text" disabled
                            value={this.props.localidad} />
                    </div>
                </form>
                <NavLink className="btn btn-secondary d-block mx-auto"
                    to="/">Volver a la lista</NavLink>
            </div>
        );
    }
}
