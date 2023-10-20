import React, { Component } from 'react'
import image404 from "../../assets/images/notfound.png"

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>ERROR 404: Not Found</h1>
                <img src={image404} alt=""
                    style={{ width: "600px", height: "300px" }} />
            </div>
        )
    }
}
