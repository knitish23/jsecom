import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id)=>{
let cartProduct = getCartProductFromLocalStorage();
cartProduct = cartProduct.filter((curProd)=>curProd.id !== id);

// Update the localstorage after removinf the item
localStorage.setItem('cartProductLocalStorage',JSON.stringify(cartProduct));

// To remove the div onclick
let removeDiv = document.getElementById(`card${id}`);
if(removeDiv){
    removeDiv.remove();
    showToast("delete",id);
}
updateCartValue(cartProduct);
}