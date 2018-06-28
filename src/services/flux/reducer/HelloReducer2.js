
import { REHYDRATE } from 'redux-persist';

const API_CALL_REQUEST2 = "API_CALL_REQUEST2";
const API_CALL_SUCCESS2 = "API_CALL_SUCCESS2";
const API_CALL_FAILURE3 = "API_CALL_FAILURE3";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    history: {
        data: [],
        dataFetched: false,
        isFetching: false,
        error: false,
        history: null
    }
  }

export function helloReducer2(state = initialState, action) {
    switch (action.type) {
        
        case REHYDRATE:
           let isFetching = (action.payload === undefined) ? false : action.payload.helloReducer2.isFetching;
           console.log(isFetching);
            return {
                ...state,
                //history: action.payload.helloReducer2,
                isFetching: isFetching//action.payload.helloReducer2.isFetching
            };

        case API_CALL_REQUEST2 :

            return {
                ...state,
                data: [],
                isFetching: true 
            };
        case API_CALL_SUCCESS2:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                dataFetched: true
            };
        case API_CALL_FAILURE3:
            return {
                ...state,
                error: ''
            };
        default:
            return state;
    }
}