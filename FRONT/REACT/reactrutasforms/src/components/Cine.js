import React, { Component } from 'react'
import cineImage from '../assets/images/cine.jpg'

export default class Cine extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "orange" }}>Cine</h1>
                <img src={cineImage} alt=""
                    style={{ width: "250px", height: "250px" }}></img>
            </div>
        );
    }
}
