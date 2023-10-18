import React, { Component } from 'react'
import musicImage from '../assets/images/musica.jpg'

export default class Musica extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Música</h1>
                <img src={musicImage}
                    style={{ width: "250px", height: "250px" }}></img>
            </div>
        );
    }
}
