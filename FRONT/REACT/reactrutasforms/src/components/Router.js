import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import Collatz from './Collatz';
import FormSimple from './FormSimple';
import TablaMult from './TablaMult';
import TablaMultV2 from './TablaMultV2';
import SeleccionMultiple from './SeleccionMultiple';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/musica" element={<Musica />} />
                    <Route path="/cine" element={<Cine />} />
                    <Route path="/ejemploform" element={<FormSimple />} />
                    <Route path="/collatz" element={<Collatz />} />
                    <Route path="/tablamult" element={<TablaMult />} />
                    <Route path="/tablamult_v2" element={<TablaMultV2 />} />
                    <Route path="/selectmult" element={<SeleccionMultiple />} />
                </Routes>
            </BrowserRouter >
        );
    }
}
