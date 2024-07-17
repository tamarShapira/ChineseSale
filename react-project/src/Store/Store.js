import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {productReducer} from './ProductSlice/ProductSlice'
import {userReducer} from './UserSlice/UserSlice'


const reducer = combineReducers({
    products: productReducer,
    users: userReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())