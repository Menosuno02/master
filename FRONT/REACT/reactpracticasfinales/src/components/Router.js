import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Hospitales from './Hospitales';
import Home from './Home';
import Menu from './Menu';
import Apuestas from './Apuestas';
import Equipo from './Equipo';
import Jugador from './Jugador';
import Jugadores from './Jugadores';
import CreateApuesta from './CreateApuesta';

export default class Router extends Component {
    render() {
        function EquipoElement() {
            let { idequipo } = useParams();
            return (<Equipo idequipo={idequipo} />)
        }

        function JugadoresElement() {
            let { idequipo } = useParams();
            return (<Jugadores idequipo={idequipo} />);
        }

        function JugadorElement() {
            let { idjugador } = useParams();
            return (<Jugador idjugador={idjugador} />);
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/hospitales" element={<Hospitales />} />

                    <Route path="/equipo/:idequipo"
                        element={<EquipoElement />} />
                    <Route path="/jugadores/:idequipo"
                        element={<JugadoresElement />} />
                    <Route path="/jugador/:idjugador"
                        element={<JugadorElement />} />
                    <Route path="/apuestas" element={<Apuestas />} />
                    <Route path="/create_apuesta" element={<CreateApuesta />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
