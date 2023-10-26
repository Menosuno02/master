import React, { Component } from 'react'

export default class Trabajadores extends Component {
    render() {
        return (
            <div className='mt-3'>
                <h2>Trabajadores</h2>
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
                            this.props.trabajadores.map((trabajador, index) => {
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
