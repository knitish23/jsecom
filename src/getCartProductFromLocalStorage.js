import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocalStorage = ()=>{
    let cartProducts = localStorage.getItem("cartProductLocalStorage"); //local storage key
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    
    //Update the cart button value
    updateCartValue(cartProducts);
    return cartProducts;

}