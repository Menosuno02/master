import React, { Component } from 'react'
import homeImage from "../../assets/images/home.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <img src={homeImage} alt=""
                    style={{ width: "300px", height: "300px" }} />
            </div>
        )
    }
}
