import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNum = React.createRef();

    state = {
        list: []
    }

    peticionForm = (event) => {
        event.preventDefault();
        let num = parseInt(this.cajaNum.current.value);
        let nums = []
        while (num >= 1) {
            nums.push(num);
            if (num === 1) break
            else
                (num % 2 === 0) ? num /= 2 : num = num * 3 + 1;
        }
        this.setState({
            list: nums
        });
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Introduce un número</label><br />
                    <input ref={this.cajaNum} type="number" /><br />
                    <button>
                        Lista números de Collatz
                    </button>
                </form>
                <ul>
                    {
                        this.state.list.map((num, index) => {
                            return (<li key={index}>{num}</li>);
                        })
                    }
                </ul>
            </div >
        );
    }
}
