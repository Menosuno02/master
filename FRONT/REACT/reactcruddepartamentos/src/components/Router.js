import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamento from './CreateDepartamento'
import MenuDepartamentos from './MenuDepartamentos'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />} />
          <Route path="/create" element={<CreateDepartamento />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
