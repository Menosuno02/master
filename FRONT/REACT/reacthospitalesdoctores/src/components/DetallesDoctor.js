import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class DetallesDoctor extends Component {
    state = {
        doctor: {}
    }

    updateDoctor = () => {
        let url = Global.urlApiDoctores;
        let request = "api/Doctores/" + this.props.iddoctor;
        axios.get(url + request).then((response) => {
            this.setState({
                doctor: response.data
            });
        });
    }

    componentDidMount = () => {
        this.updateDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idhospital !== oldProps.idhospital) {
            this.setState({
                doctor: {}
            });
        }
        if (this.props.iddoctor !== oldProps.iddoctor)
            this.updateDoctor();
    }

    render() {
        return (
            <div className='mt-3'>
                {
                    this.state.doctor.idDoctor != null &&
                    (
                        <div className='container-fluid'>
                            <h2>Detalles de {this.state.doctor.idDoctor}</h2>
                            <form className='row'>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">ID</label>
                                        <input type="text" disabled
                                            className="form-control"
                                            value={this.state.doctor.idDoctor} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Apellido</label>
                                        <input type="text" disabled
                                            className="form-control"
                                            value={this.state.doctor.apellido} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">Especialidad</label>
                                        <input type="text" disabled
                                            className="form-control"
                                            value={this.state.doctor.especialidad} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Salario</label>
                                        <input type="text" disabled
                                            className="form-control"
                                            value={this.state.doctor.salario} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        );
    }
}
