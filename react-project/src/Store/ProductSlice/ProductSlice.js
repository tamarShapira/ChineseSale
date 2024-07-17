import { produce } from 'immer'

import products from '../../Components/products/products.json'
import * as productOctions from './ProductAction'

const initialState={products}

export const productReducer = produce((state, action) => {
    switch(action.type){
        case productOctions.ADD_PRODUCT:
            state.products.push(action.payload)
            break;
        case productOctions.REMOVE_PRODUCT:
            state.products.remove(action.payload)
            break;
    }
}, initialState)