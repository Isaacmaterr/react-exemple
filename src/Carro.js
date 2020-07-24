import React, { Component } from 'react';
import Lista from './Lista'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import {Cep} from './factore/cep';



class Carro extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log(Cep('787855'));
        this.state = {
            inputValue:'',
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
        const { nomecomprador, lista ,inputValue} = this.state;
        const { nome, valor, newValue,clickButton } = this.props;
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
                <button onClick={this.comprar}>COMPRAR </button>
                <Lista lista={lista}></Lista>
            </div>
        );
    }
}
const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Carro);