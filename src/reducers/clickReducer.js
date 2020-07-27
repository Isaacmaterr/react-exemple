import { CLICK_UPDATE_VALUE,BUSQ_CEP} from '../actions/actionTypes';
import {Cep} from './../factore/cep';
const initialState = {
  newValue: '4849'
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};


const cep = {
};

export const clickButtonCep = (state = cep, action) => {
  switch (action.type) {
    case BUSQ_CEP:
        let cep = Cep(action.newValue).then();
        console.log(cep);
      return {
        ...state,
        newValue:{endereco:cep}
      };
    default:
      return state;
  }
};

