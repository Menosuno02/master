import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import MenuRutas from './MenuRutas'
import Hospital from './Hospital';
import DetallesDoctor from './DetallesDoctor';

export default class Router extends Component {
    render() {
        function HospitalElement() {
            let { idhospital } = useParams();
            return (<Hospital idhospital={idhospital} />);
        }

        function DetallesDoctorElement() {
            let { iddoctor, idhospital } = useParams();
            return <DetallesDoctor
                iddoctor={iddoctor}
                idhospital={idhospital} />
        }

        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospital/:idhospital" element={<HospitalElement />} />
                    <Route path="/detalles_doctor/:iddoctor/:idhospital" element={<DetallesDoctorElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
