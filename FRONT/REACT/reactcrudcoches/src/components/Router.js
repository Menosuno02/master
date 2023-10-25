import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import MenuCoches from './MenuCoches'
import CreateCoche from './CreateCoche'
import DetallesCoche from './DetallesCoche'
import UpdateCoche from './UpdateCoche'

export default class Router extends Component {
  render() {
    function DetallesCocheElement() {
      let { idcoche } = useParams();
      return (<DetallesCoche idcoche={idcoche} />)
    }

    function UpdateCocheElement() {
      let { idcoche } = useParams();
      return (<UpdateCoche idcoche={idcoche} />)
    }

    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />} />
          <Route path="/create" element={<CreateCoche />} />
          <Route path="/detalles/:idcoche" element={<DetallesCocheElement />} />
          <Route path="/update/:idcoche" element={<UpdateCocheElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
