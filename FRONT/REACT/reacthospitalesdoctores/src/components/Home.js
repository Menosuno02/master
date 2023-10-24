import React, { Component } from 'react'
import imageHome from '../assets/images/home.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1>Home</h1>
                <img src={imageHome} alt=""
                    className='mx-auto d-block rounded' />
            </div>
        );
    }
}
