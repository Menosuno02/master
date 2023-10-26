import React, { Component } from 'react'
import clasicoImage from "../assets/images/madridbarça.jpg"

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid mt-3'>
                <h1>Home (jeje goz)</h1>
                <img
                    alt=""
                    className='img-fluid d-block mx-auto'
                    src={clasicoImage} />
            </div>
        )
    }
}
