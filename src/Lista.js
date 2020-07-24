import React, { Component } from 'react';


class Lista extends Component {
    constructor(props) {
        super(props);
        console.log(props.lista);
        this.state = { lista: props.lista }
    };
    render() {
        const { lista } = this.state;
        const item = lista.map((item) => {
        return <li key={item.toString()}>{item}</li>
        });
        return (<ul>
            {item}
        </ul>);
    }
}

export default Lista;