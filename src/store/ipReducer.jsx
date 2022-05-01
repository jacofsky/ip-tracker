import { types } from '../types/types';

const intialState = {
    ip: null,
    loading: false
}

const ipReducer = (state = intialState, action) => {

    switch (action.type) {
        case types.loading:
            return {
                ...state,
                loading: true
            }
        
        case types.ipInfoLoaded:
            return {
                ...state,
                loading: false,
                ip: action.payload
            }

        case types.setError:
            return intialState
    
        default:
            return state
    }

}

export default ipReducer