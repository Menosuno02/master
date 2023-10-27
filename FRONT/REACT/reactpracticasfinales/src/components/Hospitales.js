import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"
import Trabajadores from './Trabajadores';

export default class Hospitales extends Component {
    selectMultiple = React.createRef();

    state = {
        hospitales: [],
        statusHospitales: false,
        statusTrabajadores: false,
        selected: ""
    }

    loadHospitales = () => {
        let url = Global.urlApiEjemplos;
        let request = "api/Hospitales";
        axios.get(url + request).then((response) => {
            this.setState({
                hospitales: response.data,
                statusHospitales: true
            });
        });
    }

    searchTrabajadores = () => {
        let aux = "";
        for (let id of this.selectMultiple.current.selectedOptions)
            aux += id.value + ","
        if (aux.length > 0) {
            this.setState({
                selected: aux.slice(0, -1),
                statusTrabajadores: true
            });
        } else {
            this.setState({
                statusTrabajadores: false
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
                            <Trabajadores className="mt-3"
                                idhospitales={this.state.selected} />
                        )
                    }
                </div>
            );
        }
    }
}
