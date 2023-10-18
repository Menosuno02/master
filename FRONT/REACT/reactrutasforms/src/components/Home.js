import React, { Component } from 'react'
import homeImage from "../assets/images/home.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Home</h1>
                <img src={homeImage}
                    style={{ width: "250px", height: "250px" }}></img>
            </div>
        );
    }
}