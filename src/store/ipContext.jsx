import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import ipReducer from "./ipReducer"


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ipData: ipReducer
})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

