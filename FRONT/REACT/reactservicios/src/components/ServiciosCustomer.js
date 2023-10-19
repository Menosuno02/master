import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ServiciosCustomer extends Component {
    state = {
        customers: []
    }

    loadCustomers = () => {
        console.log("Loading customers (tras montarse)");
        let request = "customers.json";
        axios.get(Global.urlApiCustomers + request).then((response) => {
            console.log(response.data);
            this.setState({
                customers: response.data.results
            });
        });
    }

    componentDidMount = () => {
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
