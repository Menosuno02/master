import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuscadorCustomer from './BuscadorCustomer'
import FiltrarCoches from './FiltrarCoches'
import ServiciosCustomer from './ServiciosCustomer'
import EmpleadosDept from './EmpleadosDept'
import EmpleadosOficio from './EmpleadosOficio'
import Departamentos from './MaestroDetalle/Departamentos'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ServiciosCustomer />} />
                    <Route path="/customers_buscar" element={<BuscadorCustomer />} />
                    <Route path="/coches" element={<FiltrarCoches />} />
                    <Route path="/deptemple" element={<EmpleadosDept />} />
                    <Route path="/oficioemple" element={<EmpleadosOficio />} />
                    <Route path="/dept" element={<Departamentos />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
