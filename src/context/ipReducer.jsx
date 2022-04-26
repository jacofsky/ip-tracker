import { types } from '../types/types';

const intialState = {
    data: null,
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
                data: action.payload
            }
    
        default:
            return state
    }

}

export default ipReducer