import React, { Component } from 'react'
import homeImage from "../assets/images/home.jpg"

export default class HomeDepartamentos extends Component {
  render() {
    return (
      <div className='container-fluid mt-3'>
        <h1>Home Departamentos</h1>
        <img className="img-fluid d-block mx-auto"
          src={homeImage} alt="" />
      </div>
    );
  }
}
