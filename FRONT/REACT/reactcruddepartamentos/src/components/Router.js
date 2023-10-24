import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamento from './CreateDepartamento'
import MenuDepartamentos from './MenuDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'

export default class Router extends Component {
    render() {
        function DetallesDepartamentoElement() {
            let { iddepartamento, nombre, localidad } = useParams();
            return (<DetalleDepartamento iddepartamento={iddepartamento}
                nombre={nombre} localidad={localidad} />);
        }

        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path="/" element={<HomeDepartamentos />} />
                    <Route path="/create" element={<CreateDepartamento />} />
                    <Route path="/detalles/:iddepartamento/:nombre/:localidad"
                        element={<DetallesDepartamentoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
