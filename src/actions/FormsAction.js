import { INITIAL_FETCH, SEND_SERVER } from './actionTypes';

export function getInitialFetch(data = 'Leonan Luppi') {
    return {
        type: INITIAL_FETCH,
        payload: { name: data }
    }
}

export function sendServer(data) {
    console.log(data['name']);
    console.log(SEND_SERVER);
    return {
        type: SEND_SERVER,
        payload:{ name: data['name'] }
    }
}