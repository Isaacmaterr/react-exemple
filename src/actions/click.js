import { CLICK_UPDATE_VALUE,BUSQ_CEP } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
  });


  export const clickButtonCep = (value)=> {
  
  console.log(value);
    return {
    type: BUSQ_CEP,
    newValue: value
  }

};