import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import Trabajadores from './Trabajadores';

export default class Hospitales extends Component {
    selectMultiple = React.createRef();
    cajaIncremento = React.createRef();

    state = {
        hospitales: [],
        statusHosp: false,
        trabajadores: [],
        statusTrabajadores: false
    }

    loadHospitales = () => {
        let url = Global.urlApi;
        let request = "api/Hospitales";
        axios.get(url + request).then((response) => {
            this.setState({
                hospitales: response.data,
                statusHosp: true
            });
        });
    }

    searchTrabajadores = () => {
        let opciones = this.selectMultiple.current.options;
        let selected = [];
        for (let opcion of opciones)
            if (opcion.selected) selected.push(opcion);
        let url = Global.urlApi;
        let request = "api/Trabajadores/TrabajadoresHospitales";
        for (let i = 0; i < selected.length; i++) {
            (i === 0)
                ? request += "?idhospital=" + selected[i].value + "&"
                : request += "idhospital=" + selected[i].value + "&";
        }
        axios.get(url + request).then((response) => {
            this.setState({
                trabajadores: response.data,
                statusTrabajadores: true
            });
        });
    }

    incrementarSueldos = (event) => {
        event.preventDefault();
        let opciones = this.selectMultiple.current.options;
        let selected = [];
        for (let opcion of opciones)
            if (opcion.selected) selected.push(opcion);
        let url = Global.urlApi;
        let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales"
            + "?incremento=" + parseInt(this.cajaIncremento.current.value) + "&";
        for (let i = 0; i < selected.length; i++) {
            (i === 0)
                ? request += "&idhospital=" + selected[i].value + "&"
                : request += "idhospital=" + selected[i].value + "&";
        }
        axios.put(url + request).then((response) => {
            this.searchTrabajadores();
        });
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    render() {
        if (!this.state.statusHosp) {
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
                        multiple>
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
                    <form className='mt-3'>
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
                    {
                        this.state.statusTrabajadores &&
                        (
                            <Trabajadores
                                trabajadores={this.state.trabajadores} />
                        )
                    }
                </div>
            );
        }

    }
}
