import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCustomer extends Component {
    urlApi = Global.urlApiCustomers;
    cajaID = React.createRef();

    state = {
        customer: null,
        status: false
    }

    buscarCustomer = (event) => {
        event.preventDefault();
        let request = "customers/" + this.cajaID.current.value + ".json";
        axios.get(this.urlApi + request).then((response) => {
            this.setState({
                customer: response.data.customer,
                status: true
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador de Customers (por ID)</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>ID</label><br />
                    <input ref={this.cajaID} type="text" />
                    <button>Buscar customer</button>
                </form>
                {
                    this.state.status &&
                    (<div>
                        <h2 style={{ color: "green" }}>
                            Cliente: {this.state.customer.contactName}
                        </h2>
                        <h3 style={{ color: "red" }}>
                            Empresa: {this.state.customer.companyName}
                        </h3>
                        <h3 style={{ color: "red" }}>
                            Ciudad: {this.state.customer.city}
                        </h3>
                        <h3 style={{ color: "red" }}>
                            Cargo: {this.state.customer.contactTitle}
                        </h3>
                    </div>)
                }
            </div>
        );
    }
}
