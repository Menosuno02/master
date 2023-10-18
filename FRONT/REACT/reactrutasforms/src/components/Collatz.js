import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNum = React.createRef();

    state = {
        list: []
    }

    peticionForm = (event) => {
        event.preventDefault();
        let num = parseInt(this.cajaNum.current.value);
        this.state.list.splice(0, this.state.list.length);
        this.setState({
            list: this.state.list
        });
        while (num >= 1) {
            this.state.list.push(num);
            if (num === 1) break
            else
                (num % 2 === 0) ? num /= 2 : num = num * 3 + 1;
        }
        this.setState({
            list: this.state.list
        });
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Número</label><br />
                    <input ref={this.cajaNum} type="text" /><br />
                    <button>
                        Lista números de Collatz
                    </button>
                </form>
                {
                    this.state.list.length === 0 ?
                        (<div></div>) :
                        (<div>
                            <ul>
                                {
                                    this.state.list.map((num, index) => {
                                        return (<li key={index}>{num}</li>);
                                    })
                                }
                            </ul>
                        </div>)
                }
            </div >
        );
    }
}
