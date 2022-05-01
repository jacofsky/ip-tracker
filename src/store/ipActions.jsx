import { types } from "../types/types";

export const setLoading = () => ({ type: types.loading })

export const setData = (data) => ({ 
    type: types.ipInfoLoaded, 
    payload: {
        data,
        loading: false
    }
    
})

export const setError = () => ({type: types.setError})
