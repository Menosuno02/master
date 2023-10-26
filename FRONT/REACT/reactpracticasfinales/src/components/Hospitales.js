import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import Trabajadores from './Trabajadores';

export default class Hospitales extends Component {
    selectMultiple = React.createRef();
    cajaIncremento = React.createRef();
    selected = []

    state = {
        hospitales: [],
        statusHospitales: false,
        trabajadores: [],
        statusTrabajadores: false
    }

    loadHospitales = () => {
        let url = Global.urlApi;
        let request = "api/Hospitales";
        axios.get(url + request).then((response) => {
            this.setState({
                hospitales: response.data,
                statusHospitales: true
            });
        });
    }

    searchTrabajadores = () => {
        this.selected = this.selectMultiple.current.selectedOptions;
        if (this.selected.length > 0) {
            let url = Global.urlApi;
            let request = "api/Trabajadores/TrabajadoresHospitales?";
            for (let id of this.selected)
                request += "idhospital=" + id.value + "&";
            axios.get(url + request).then((response) => {
                this.setState({
                    trabajadores: response.data,
                    statusTrabajadores: true
                });
            });
        } else {
            this.setState({
                statusTrabajadores: false
            });
        }
    }

    incrementarSueldos = (event) => {
        event.preventDefault();
        if (this.cajaIncremento.current.value !== "") {
            let url = Global.urlApi;
            let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales"
                + "?incremento=" + parseInt(this.cajaIncremento.current.value) + "&";
            for (let id of this.selected)
                request += "idhospital=" + id.value + "&";
            axios.put(url + request).then((response) => {
                this.searchTrabajadores();
            });
        }
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    render() {
        if (!this.state.statusHospitales) {
            return (<img alt="" className='d-block mx-auto'
                src={loadingImage} />);
        } else {
            return (
                <div className='container-fluid mt-3'>
                    <h1>Hospitales</h1>
                    <hr className='border border-primary opacity-100' />
                    <select ref={this.selectMultiple}
                        className=' form-select'
                        onChange={this.searchTrabajadores}
                        multiple
                        size={this.state.hospitales.length}>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <option key={index}
                                        value={hospital.idHospital}>
                                        {hospital.nombre}
                                    </option>
                                );
                            })
                        }
                    </select>
                    {
                        this.state.statusTrabajadores &&
                        (
                            <div className='mt-3'>
                                <form>
                                    <label
                                        className='form-label'>
                                        Incremento</label>
                                    <input
                                        className='form-control'
                                        ref={this.cajaIncremento}
                                        type="number" />
                                    <button
                                        className='btn btn-primary btn-sm w-100 mt-3'
                                        onClick={this.incrementarSueldos}>
                                        Incrementar sueldos</button>
                                </form>
                                <Trabajadores
                                    trabajadores={this.state.trabajadores} />
                            </div>
                        )
                    }
                </div>
            );
        }
    }
}