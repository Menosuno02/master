import React, { Component } from 'react'

export default class CreateApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaMadrid = React.createRef();
    cajaBarça = React.createRef();
    cajaFecha = React.createRef();
    fecha = "";

    componentDidMount = () => {
        let fecha = new Date();
        let dia = fecha.getDay();
        let mes = fecha.getMonth() + 1;
        let anyo = fecha.getFullYear();
        console.log(dia)
        this.fecha = dia + "/" + mes + "/" + anyo;
    }

    render() {
        return (
            <div className='container-fluid mt-3'>
                <h1>Nueva apuesta</h1>
                <form>
                    <div className='mt-3'>
                        <label className='form-label'>
                            Usuario
                        </label>
                        <input
                            type='text'
                            ref={this.cajaUsuario}
                            className='form-control' />
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>
                            Real Madrid
                        </label>
                        <input
                            type='text'
                            ref={this.cajaMadrid}
                            className='form-control' />
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>
                            Barcelona
                        </label>
                        <input
                            type='text'
                            ref={this.cajaBarça}
                            className='form-control' />
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>
                            Fecha
                        </label>
                        <input
                            type='text'
                            ref={this.cajaFecha}
                            value={this.fecha}
                            disabled
                            className='form-control' />
                    </div>
                </form>
            </div>
        )
    }
}
