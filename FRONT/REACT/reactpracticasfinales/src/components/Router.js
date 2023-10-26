import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Hospitales from './Hospitales';
import Trabajadores from './Trabajadores';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hospitales />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
