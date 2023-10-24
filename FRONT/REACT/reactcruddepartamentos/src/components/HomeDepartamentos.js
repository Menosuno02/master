import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import loadingImage from "../assets/images/loading.gif"

export default class HomeDepartamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        let url = Global.urlApiDept;
        let request = "api/Departamentos";
        axios.get(url + request).then((response) => {
            this.setState({
                departamentos: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    componentDidUpdate = () => {
        this.loadDepartamentos();
    }

    render() {
        if (!this.state.status) {
            return (
                <img alt="" className='mx-auto d-block' src={loadingImage} />
            );
        } else {
            return (
                <div className='container-fluid mt-3'>
                    <h1>Departamentos</h1>
                    <hr className='border border-primary opacity-100' />
                    {
                        this.state.status &&
                        (
                            <table className='table'>
                                <thead className='border-primary'>
                                    <tr>
                                        <th>Número</th>
                                        <th>Nombre</th>
                                        <th>Localidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.departamentos.map((dept, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{dept.numero}</td>
                                                    <td>{dept.nombre}</td>
                                                    <td>{dept.localidad}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            );
        }
    }
}
