import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let productTax = document.querySelector(".productTax").textContent;
  productTax = productTax.replace("₹", "");
  // Get the data from localstorage
  let arrLocalStorageProduct = getCartProductFromLocalStorage();
  let initialValue = 0;
  let totalProductPrice = arrLocalStorageProduct.reduce((accum, curElem) => {
    let productPrice = Math.round(curElem.price) || 0;
    
    return accum + productPrice;
  }, initialValue);
  //   console.log(totalProductPrice);
  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${
    Number(totalProductPrice) + Number(productTax)
  }`;
  // console.log(productTax);
};
