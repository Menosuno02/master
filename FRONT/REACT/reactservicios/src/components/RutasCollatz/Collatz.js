import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numeros: []
    }

    numCollatz = () => {
        let nums = [];
        let num = parseInt(this.props.numero);
        while (num !== 1) {
            nums.push(num);
            (num % 2 === 0) ? num /= 2 : num = num * 3 + 1;
        }
        nums.push(1);
        this.setState({
            numeros: nums
        });
    }

    componentDidMount = () => {
        this.numCollatz();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.numero !== oldProps.numero)
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
