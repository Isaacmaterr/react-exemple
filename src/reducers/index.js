import { clickReducer, clickButtonCep } from './clickReducer';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import Nome from './Nome'
export const Reducers = combineReducers({
  form: reduxFormReducer,
  clickState: clickReducer,
  clickCep: clickButtonCep,
});