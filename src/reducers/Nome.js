import { INITIAL_FETCH, SEND_SERVER } from './../actions/actionTypes';
const INITIAL_STATE = { data: {} };

export default function reducerName(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INITIAL_FETCH:
            return { ...state, data: action.payload };
        case SEND_SERVER:
            console.log(action);
            return {...state, data: action.payload.data };
        default:
            return state;
    }
}