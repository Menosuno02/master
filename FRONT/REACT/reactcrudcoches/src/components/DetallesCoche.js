import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesCoche extends Component {
  state = {
    coche: {},
    status: false
  }

  findCoche = () => {
    let url = Global.urlApiCoches;
    let request = "api/Coches/FindCoche/" + this.props.idcoche;
    axios.get(url + request).then((response) => {
      this.setState({
        coche: response.data,
        status: true
      });
    });
  }

  componentDidMount = () => {
    this.findCoche();
  }

  render() {
    return (
      <div className="container-fluid mt-3">
        <h1>Detalles Coche {this.props.idcoche}</h1>
        <hr className="border border-primary opacity-100" />
        {
          this.state.status &&
          (
            <div>
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="mt-3">
                      <label className="form-label">
                        ID Coche
                      </label>
                      <input
                        className='form-control'
                        type="number"
                        disabled
                        value={this.state.coche.idCoche}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="form-label">
                        Marca
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        disabled
                        value={this.state.coche.marca}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="form-label">
                        Modelo
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        disabled
                        value={this.state.coche.modelo}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="form-label">
                        Conductor
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        disabled
                        value={this.state.coche.conductor}
                      />
                    </div>
                  </div>
                  <div className="col-6 mt-5">
                    <img
                      className="w-100"
                      src={this.state.coche.imagen} alt="" />
                  </div>
                </div>

              </form>
              <NavLink className="btn btn-secondary w-100 mt-3" to="/">
                Volver a la tabla
              </NavLink>
            </div >

          )
        }
      </div>
    )
  }
}
