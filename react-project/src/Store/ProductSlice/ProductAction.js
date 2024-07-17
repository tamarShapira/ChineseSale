export const ADD_PRODUCT = '@cart/ADD_PRODUCT'
export const REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT'

export function addProductToCart(product){
  return  {type: ADD_PRODUCT,payload: {product}}
};
export function removeProductFromCart(product){
  return { type: REMOVE_PRODUCT,payload: {product}}
};