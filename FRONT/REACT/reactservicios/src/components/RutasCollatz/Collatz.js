import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numeros: []
    }

    numCollatz = () => {
        let nums = [];
        let num = parseInt(this.props.numero);
        while (num >= 1) {
            nums.push(num);
            if (num === 1) break;
            else
                (num % 2 === 0) ? num /= 2 : num = num * 3 + 1;
        }
        this.setState({
            numeros: nums
        });
    }

    componentDidMount = () => {
        this.numCollatz();
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz con {this.props.numero}</h1>
                <ul>
                    {
                        this.state.numeros.map((num, index) => {
                            return (
                                <li key={index}>{num}</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
