import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
  newValue: '4849'
};
export const clickReducer = (state = initialState, action) => {
    console.log(action);
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