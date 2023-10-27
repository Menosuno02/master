import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Trabajadores extends Component {
    cajaIncremento = React.createRef();

    state = {
        trabajadores: []
    }

    loadTrabajadores = () => {
        let url = Global.urlApiEjemplos;
        let request = "api/Trabajadores/TrabajadoresHospitales?";
        for (let id of this.props.idhospitales.split(","))
            request += "idhospital=" + id + "&";
        axios.get(url + request).then((response) => {
            this.setState({
                trabajadores: response.data,
            });
        });
    }

    incrementarSueldos = (event) => {
        event.preventDefault();
        if (this.cajaIncremento.current.value !== "") {
            let url = Global.urlApiEjemplos;
            let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales"
                + "?incremento=" + parseInt(this.cajaIncremento.current.value) + "&";
            for (let id of this.props.idhospitales.split(","))
                request += "idhospital=" + id + "&";
            axios.put(url + request).then((response) => {
                this.loadTrabajadores();
            });
        }
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idhospitales !== oldProps.idhospitales)
            this.loadTrabajadores();
    }

    render() {
        return (
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
                <h2 className='mt-3'>Trabajadores</h2>
                <hr className='border border-primary opacity-100' />
                <table className='table'>
                    <thead className='border-primary'>
                        <tr>
                            <th>ID</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>ID Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trabajador.idTrabajador}</td>
                                        <td>{trabajador.apellido}</td>
                                        <td>{trabajador.oficio}</td>
                                        <td>{trabajador.salario}</td>
                                        <td>{trabajador.idHospital}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
