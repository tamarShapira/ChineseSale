import { produce } from 'immer'
import * as userActions from './UserAction'


const initialState={
users:[],
currentUser:{
    personDetails:{ 
        id: "",
        name: "",
        address: "",
        email: "",
    },
    creditCardDetails: { creditCardNumber: "", validity: "", threeDigits: "" },
    products:[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0],
},
}

export const userReducer = produce((state, action) => {
    switch(action.type){
        case userActions.SET_USERS:
            return { ...state, users: action.payload };  
            break;
        case userActions.SET_NEW_USER:
            state.users.push(action.payload); 
            break;
        case userActions.ADD_PRODUCT_TO_CART:
            console.log('currentuser= ',state.currentUser.products);
            state.currentUser.products[action.payload] += 1;  
            break;
        case userActions.REMOVE_PRODUCT_FROM_CART:
            if (state.currentUser.products[action.payload] > 0) {
                state.currentUser.products[action.payload] -= 1;
            }
            break;
        case userActions.INIT_USER_CREDITCARD_DETAILS:
            state.currentUser.creditCardDetails = action.payload;
            break;
    }
}, initialState)