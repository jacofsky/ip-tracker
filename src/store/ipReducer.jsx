import { types } from '../types/types';

const intialState = {
    ip: null,
    loading: false,
    ok: true
}

const ipReducer = (state = intialState, action) => {

    switch (action.type) {
        case types.loading:
            return {
                ...state,
                loading: true,
                ok: true,
            }
        
        case types.ipInfoLoaded:
            return {
                ...state,
                loading: false,
                ip: action.payload,
                ok: true
            }

        case types.setError:
            return {
                ...state,
                ip: null,
                loading: false,
                ok: false
            }
    
        default:
            return state
    }

}

export default ipReducer