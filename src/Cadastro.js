import React, { Component } from 'react'
import FormCadastro from './forms/FormCadastro'
import { connect } from 'react-redux';
import { sendServer,getInitialFetch }  from './actions/FormsAction';
class Cadastro extends Component {

    onChangeName = ({ target }) => {
        const { name, value } = target;
        console.log('Target Input', name, value);
        this.props.atualizarDados(value);
    }


    onClick = (e, data) => {
        e.preventDefault();
        console.log('Clicked in Redux Form', data);
        this.props.createName(data);
      }

    render() {
        return (
            <>
                
                <FormCadastro onChangeName={this.onChangeName} onClick={this.onClick}></FormCadastro>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialValues: state.Nome.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createName: (data) => dispatch(sendServer(data)),
      atualizarDados:(data)=>dispatch(getInitialFetch(data))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);