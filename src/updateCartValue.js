const cartValues = document.querySelector('#cartValue');
export const updateCartValue = (cartProducts)=>{
    return cartValues.innerHTML =`<i class="fa-solid fa-cart-shopping">&nbsp;${cartProducts.length}</i>`

}