import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class CreateHospital extends Component {
    state = {
        mensaje: ""
    }

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTlf = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (event) => {
        event.preventDefault();
        let hospital = {
            idhospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTlf.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        }
        let url = Global.urlApiHospitales;
        let request = "webresources/hospitales/post";
        axios.post(url + request, hospital).then((response) => {
            this.setState({
                mensaje: "Hospital " + hospital.nombre + " insertado"
            });
        });
    }

    render() {
        return (
            <div className="container-fluid mt-3">
                <h1>Crear Hospital</h1>
                <hr className="border border-primary opacity-100" />
                <h2 style={{ color: "blue" }}>{this.state.mensaje}</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">ID Hospital</label>
                        <input ref={this.cajaId}
                            className="form-control" type="number" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input ref={this.cajaNombre}
                            className="form-control" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input ref={this.cajaDireccion}
                            className="form-control" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input ref={this.cajaTlf}
                            className="form-control" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Camas</label>
                        <input ref={this.cajaCamas}
                            className="form-control" type="number" />
                    </div>
                    <button
                        onClick={this.insertHospital}
                        className="btn btn-primary">Crear</button>
                </form>
            </div>
        );
    }
}
