import React, { Component } from 'react'

export default class DetallesDoctor extends Component {
    state = {
        doctor: {
            id: "",
            apellido: "",
            especialidad: "",
            salario: 0
        }
    }

    updateDoctor = () => {
        let doctor = this.props.doctor;
        this.setState({
            doctor: {
                id: doctor.idDoctor,
                apellido: doctor.apellido,
                especialidad: doctor.especialidad,
                salario: doctor.salario
            }
        });
    }

    componentDidMount = () => {
        this.updateDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.doctor.idDoctor !== oldProps.doctor.idDoctor)
            this.updateDoctor();
    }

    render() {
        return (
            <div>
                <h2>Detalles de {this.props.doctor.idDoctor}</h2>
                <form>
                    <div class="mb-3">
                        <label class="form-label">ID</label>
                        <input type="text" disabled
                            class="form-control"
                            value={this.state.doctor.id} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Apellido</label>
                        <input type="text" disabled
                            class="form-control"
                            value={this.state.doctor.apellido} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Especialidad</label>
                        <input type="text" disabled
                            class="form-control"
                            value={this.state.doctor.especialidad} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Salario</label>
                        <input type="text" disabled
                            class="form-control"
                            value={this.state.doctor.salario} />
                    </div>
                </form>
            </div>
        )
    }
}
