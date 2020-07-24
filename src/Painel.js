import React, { Component } from 'react';
import Carro from './Carro'
import {Link} from "react-router-dom"

class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carros:[ {nome:'Corrola', 'valor': 90000.00 },{ nome:'Fiat-Touto','valor': 150000 }, {nome:'Uno', 'valor': 15000} , {nome:'Gol', 'valor': 15000 }],
            carroSelecionado:{}
        }
    }
    selecionarCarro = (e) => {
        this.setState({
            carroSelecionado:this.state.carros[e.target.attributes.getNamedItem('carro').value]
        })
    }
    render() {
        const {carros,carroSelecionado} = this.state;
        const mapea = carros.map((element,index)=> {

            const cor = (this.state.carroSelecionado.nome===element.nome)?'yellow':'red';
            return <div key={element.nome.toString()}><p>{element.nome} <button onClick={this.selecionarCarro} carro={index} style={{backgroundColor: cor}}>SELECIONAR</button></p></div>
        });
        return (<div>
            <Link to={'/sobre'}>Sobre</Link>
           {mapea}
           <Carro {...carroSelecionado}></Carro>
        </div>);
    }
}

export default Painel;