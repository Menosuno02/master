import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import SumarNumeros from "./components/SumarNumeros/SumarNumeros.js";
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
      <SumarNumeros numero1="2" numero2="7" />
      <SumarNumeros numero1="4" numero2="15" />

      <SaludoPadre />
    */}

    <PadreMatematicas />
    <Contador />
    <Car marca="Audi" modelo="Q7" aceleracion="30" velocidadmax="230" />
    <Car marca="Pontiac" modelo="Firebird" aceleracion="40" velocidadmax="320" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
