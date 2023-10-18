import React, { Component } from 'react'

export default class FormSimple extends Component {
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();
    state = {
        user: null
    }

    peticionForm = (event) => {
        event.preventDefault(); // desactivar submit
        console.log("Datos recibidos");
        this.setState({
            user: {
                nombre: this.cajaNombre.current.value,
                edad: this.cajaEdad.current.value
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Form Simple</h1>
                {
                    this.state.user &&
                    (
                        <div>
                            <h2 style={{ color: "purple" }}>
                                Usuario: {this.state.user.nombre},
                                Edad: {this.state.user.edad}
                            </h2>
                        </div>
                    )
                }
                <form onSubmit={this.peticionForm}>
                    <label>Nombre</label><br />
                    <input ref={this.cajaNombre} type="text"
                        onChange={this.peticionForm} /><br />
                    <label>Edad</label><br />
                    <input ref={this.cajaEdad} type="text"
                        onChange={this.peticionForm} /><br />
                    <button>Enviar datos</button>
                </form>
            </div>
        );
    }
}
