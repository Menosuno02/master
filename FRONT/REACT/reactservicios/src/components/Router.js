import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuscadorCustomer from './BuscadorCustomer'
import FiltrarCoches from './FiltrarCoches'
import ServiciosCustomer from './ServiciosCustomer'
import DeptEmple from './DeptEmple'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ServiciosCustomer />} />
                    <Route path="/customers_buscar" element={<BuscadorCustomer />} />
                    <Route path="/coches" element={<FiltrarCoches />} />
                    <Route path="/deptemple" element={<DeptEmple />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
