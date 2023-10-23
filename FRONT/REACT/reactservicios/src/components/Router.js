import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import BuscadorCustomer from './BuscadorCustomer'
import FiltrarCoches from './FiltrarCoches'
import ServiciosCustomer from './ServiciosCustomer'
import EmpleadosDept from './EmpleadosDept'
import EmpleadosOficio from './EmpleadosOficio'
import Departamentos from './MaestroDetalle/Departamentos'

import Home from './RutasParametros/Home'
import NotFound from './RutasParametros/NotFound'
import TablaMultiplicar from './RutasParametros/TablaMultiplicar'
import Collatz from './RutasCollatz/Collatz'
import RutasCollatz from './RutasCollatz/RutasCollatz'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            // Permititá capturas los parámetros de la ruta dinámicamente
            let { numero } = useParams();
            return (<TablaMultiplicar numero={numero} />);
        }

        function CollatzElement() {
            let { numero } = useParams();
            return (<Collatz numero={numero} />);
        }

        return (
            <BrowserRouter>
                <h2 style={{ color: "orange" }}>Menús en Router</h2>
                <MenuRutas />
                <RutasCollatz />

                <Routes>
                    <Route path="/customers" element={<ServiciosCustomer />} />
                    <Route path="/customers_buscar" element={<BuscadorCustomer />} />
                    <Route path="/coches" element={<FiltrarCoches />} />
                    <Route path="/deptemple" element={<EmpleadosDept />} />
                    <Route path="/oficioemple" element={<EmpleadosOficio />} />
                    <Route path="/dept" element={<Departamentos />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/tablamult/:numero" element={<TablaMultiplicarElement />} />
                    {/* Para rutas que no existan, * en path y última ruta en Routes */}
                    <Route path="*" element={<NotFound />} />

                    <Route path="/collatz/:numero" element={<CollatzElement />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
