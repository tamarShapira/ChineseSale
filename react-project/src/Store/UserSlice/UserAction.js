 export const SET_USERS='@users/SET_USERS'
 export const SET_NEW_USER='@users/SET_NEW_USER'
 export const ADD_PRODUCT_TO_CART='@users/ADD_PRODUCT_TO_CART'
 export const REMOVE_PRODUCT_FROM_CART='@users/REMOVE_PRODUCT_FROM_CART'
 export const INIT_USER_CREDITCARD_DETAILS='@users/INIT_USER_CREDITCARD_DETAILS'

export function setUsers (users) {
   return {type: SET_USERS,payload: users}
  };
export function setNewUser(user){
   return {type: SET_NEW_USER,payload: user}
  };
export function addProductToCart(ProductId){
    return { type: ADD_PRODUCT_TO_CART, payload: ProductId}
};
export function removeProductFromCart(ProductId){
    return { type: REMOVE_PRODUCT_FROM_CART, payload: ProductId}
};
export function initUserCreditCardDetails(creditCardDetails){
    return { type: INIT_USER_CREDITCARD_DETAILS, payload: creditCardDetails}
}
