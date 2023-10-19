import React, { Component } from 'react'
import axios from 'axios';

export default class ServiciosCustomer extends Component {
    urlApi = "https://northwind.netcore.io/customers.json";

    state = {
        customers: []
    }

    loadCustomers = () => {
        console.log("Loading customers");
        axios.get(this.urlApi).then((response) => {
            console.log(response.data);
            this.setState({
                customers: response.data.results
            });
        });
    }

    componentDidMount = () => {
        console.log("Loading customers (solo tras montarse)");
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1>ServiciosCustomer</h1>
                {
                    this.state.customers.map((cliente, index) => {
                        return (<h2 style={{ color: "blue" }} key={index}>
                            {cliente.contactName}
                        </h2>);
                    })
                }
            </div>
        );
    }
}
