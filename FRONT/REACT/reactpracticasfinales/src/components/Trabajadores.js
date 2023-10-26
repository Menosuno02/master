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
                            <td>ID</td>
                            <td>Apellido</td>
                            <td>Oficio</td>
                            <td>Salario</td>
                            <td>ID Hospital</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.trabajadores.map((t, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{t.idTrabajador}</td>
                                        <td>{t.apellido}</td>
                                        <td>{t.oficio}</td>
                                        <td>{t.salario}</td>
                                        <td>{t.idHospital}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
