import React, { Component } from 'react'
import Global from '../Global';
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';

export default class CreateCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef()
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();
    /**
     * También con event.target.files[0].name y /static/media
     * O con var reactiva file = event.target.files[0] y file = URL.createObjectURL(file)
     */

    state = {
        status: false
    }

    createCoche = (event) => {
        event.preventDefault();
        let img = "/static/media/" +
            this.cajaImagen.current.value.split("\\").pop();
        let coche = {
            idCoche: parseInt(this.cajaId.current.value),
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: img
        }
        let url = Global.urlApiCoches;
        let request = "api/Coches/InsertCoche";
        axios.post(url + request, coche).then((response) => {
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
                    <h1>Crear coche</h1>
                    <hr className='border border-primary opacity-100' />
                    <form>
                        <div className='mt-3'>
                            <label className='form-label'>ID Coche</label>
                            <input
                                className='form-control'
                                ref={this.cajaId}
                                type="number" />
                        </div >
                        <div className='mt-3'>
                            <label className='form-label'>Marca</label>
                            <input
                                className='form-control'
                                ref={this.cajaMarca}
                                type="text" />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Modelo</label>
                            <input
                                className='form-control'
                                ref={this.cajaModelo}
                                type="text" />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Conductor</label>
                            <input
                                className='form-control'
                                ref={this.cajaConductor}
                                type="text" />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Imagen</label>
                            <input
                                className='form-control'
                                ref={this.cajaImagen}
                                type="file"
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <button
                                    className="btn btn-success w-100"
                                    onClick={this.createCoche}>Crear</button>
                            </div>
                            <div className="col-6">
                                <NavLink
                                    className="btn btn-secondary w-100"
                                    to="/">Cancelar</NavLink>
                            </div>
                        </div>
                    </form >
                </div >
            )
        }

    }
}
