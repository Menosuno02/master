import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {
   cajaId = React.createRef();
   cajaMarca = React.createRef();
   cajaModelo = React.createRef();
   cajaConductor = React.createRef();
   cajaImagen = React.createRef();
   /**
   * También con event.target.files[0].name y /static/media
   * O con var reactiva file = event.target.files[0] y file = URL.createObjectURL(file)
   */

   state = {
      coche: {},
      statusFind: false,
      statusUpdate: false
   }

   findCoche = () => {
      let url = Global.urlApiCoches;
      let request = "api/Coches/FindCoche/" + this.props.idcoche;
      axios.get(url + request).then((response) => {
         this.setState({
            coche: response.data,
            statusFind: true
         });
      });
   }

   updateCoche = (event) => {
      event.preventDefault();
      let img = "/static/media/" +
         this.cajaImagen.current.value.split("\\").pop();
      let coche = {
         idCoche: parseInt(this.cajaId.current.value),
         marca: this.cajaMarca.current.value,
         modelo: this.cajaModelo.current.value,
         conductor: this.cajaConductor.current.value,
         imagen: img
      }
      let url = Global.urlApiCoches;
      let request = "api/Coches/UpdateCoche";
      axios.put(url + request, coche).then((response) => {
         this.setState({
            statusUpdate: true
         });
      });
   }

   componentDidMount = () => {
      this.findCoche();
   }

   render() {
      if (this.state.statusUpdate)
         return (<Navigate to="/" />)
      else {
         return (
            <div className='container-fluid mt-3'>
               <h1>Modificar coche {this.props.idcoche}</h1>
               <hr className='border border-primary opacity-100' />
               {
                  this.state.statusFind &&
                  (
                     <form>
                        <div className='mt-3'>
                           <label className='form-label'>ID Coche</label>
                           <input
                              className='form-control'
                              ref={this.cajaId}
                              value={this.state.coche.idCoche}
                              disabled
                              type="number" />
                        </div>
                        <div className='mt-3'>
                           <label className='form-label'>Marca</label>
                           <input
                              className='form-control'
                              ref={this.cajaMarca}
                              defaultValue={this.state.coche.marca}
                              type="text" />
                        </div>
                        <div className='mt-3'>
                           <label className='form-label'>Modelo</label>
                           <input
                              className='form-control'
                              ref={this.cajaModelo}
                              defaultValue={this.state.coche.modelo}
                              type="text" />
                        </div>
                        <div className='mt-3'>
                           <label className='form-label'>Conductor</label>
                           <input
                              className='form-control'
                              ref={this.cajaConductor}
                              defaultValue={this.state.coche.conductor}
                              type="text" />
                        </div>
                        <div className='mt-3'>
                           <label className='form-label'>Imagen</label>
                           <input
                              className='form-control'
                              ref={this.cajaImagen}
                              type="file"
                              onChange={(event) => {
                                 this.setState({
                                    file: event.target.files[0]
                                 })
                              }} />
                        </div>
                        <div className="row mt-3">
                           <div className="col-6">
                              <button
                                 className="btn btn-primary w-100"
                                 onClick={this.updateCoche}>
                                 Modificar</button>
                           </div>
                           <div className="col-6">
                              <NavLink
                                 className="btn btn-secondary w-100"
                                 to="/">
                                 Cancelar</NavLink>
                           </div>
                        </div>
                     </form>
                  )
               }
            </div>
         );
      }
   }
}
