import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuscadorCustomer from './BuscadorCustomer'
import FiltrarCoches from './FiltrarCoches'
import ServiciosCustomer from './ServiciosCustomer'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ServiciosCustomer />} />
                    <Route path="/customers_buscar" element={<BuscadorCustomer />} />
                    <Route path="/coches" element={<FiltrarCoches />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
