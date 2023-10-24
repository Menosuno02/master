import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import MenuRutas from './MenuRutas'
import Hospital from './Hospital';
import DetallesDoctor from './DetallesDoctor';
import CreateHospital from './CreateHospital';
import ListaHospitales from './ListaHospitales';

export default class Router extends Component {
    render() {
        function HospitalElement() {
            let { idhospital } = useParams();
            return (<Hospital idhospital={idhospital} />);
        }

        function DetallesDoctorElement() {
            let { idhospital, iddoctor } = useParams();
            return <DetallesDoctor
                idhospital={idhospital}
                iddoctor={iddoctor} />
        }

        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospital/:idhospital" element={<HospitalElement />} />
                    <Route path="/hospital/:idhospital/:iddoctor" element={<DetallesDoctorElement />} />

                    <Route path="/create_hospital" element={<CreateHospital />} />
                    <Route path="/hospitales" element={<ListaHospitales />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
