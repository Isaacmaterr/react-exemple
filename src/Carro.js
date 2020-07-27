import React, { Component } from 'react';
import Lista from './Lista'
import { connect } from 'react-redux';
import { clickButton, clickButtonCep } from './actions/click';

class Carro extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            lista: [],
            nomecomprador: ''
        }
    }
    comprar = (e) => {
        const { nomecomprador } = this.state;
        const { nome, valor } = this.props;
        this.setState({});
        this.state.lista.push('Comprador ' + nomecomprador + ' Carro ' + nome, ' Valor ' + valor);
    }
    inputchange = (e) => {

        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { nomecomprador, lista, inputValue, cep } = this.state;
        const { nome, valor, newValue, clickButton, clickButtonCep,newEndereco } = this.props;
        console.log(newEndereco);
        return (
            <div>
                <p>Comprador:{nomecomprador}</p>
                <p>{nome}</p>
                <input name='nomecomprador' onChange={this.inputchange} value={nomecomprador}></input>
                <p>Valor:{valor}</p>
                <input
                    onChange={this.inputchange}
                    type='text'
                    name='inputValue'
                    value={inputValue}
                />
                <button onClick={() => clickButton(inputValue)}>Obser</button>




                <p>intereces:{newValue}</p>


                <input
                    onChange={this.inputchange}
                    type='text'
                    name='cep'
                    value={cep}
                />
                <button onClick={() => clickButtonCep(cep)}>Cep</button>
                <p>Endereco:{newEndereco?.endereco}</p>
                <button onClick={this.comprar}>COMPRAR </button>
                <Lista lista={lista}></Lista>
            </div>
        );
    }
}
const mapStateToProps = store => ({
    newValue: store.clickState.newValue,
    newEndereco: store.clickCep.newValue
});


const mapDispatchToProps = (dispatch) => {
    return {
        clickButtonCep: (data) => dispatch(clickButtonCep(data)),
        clickButton:(data)=>dispatch(clickButton(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carro);