import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currentProductElem = document.querySelector(`#card${id}`);
  // console.log(currentProductElem);
  let quantity = currentProductElem.querySelector(".productQuantity").innerText;
  let price = currentProductElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");
  let existingProduct = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    // console.log(updatedCart);

    localStorage.setItem("cartProductLocalStorage", JSON.stringify(updatedCart));
    showToast("add",id);
  }
  
  if (existingProduct) {
    alert("Already exist");
    return false;
  }
  quantity = Number(quantity);
  price = Number(price * quantity);
  // console.log(quantity, price);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLocalStorage",JSON.stringify(arrLocalStorageProduct));
  

  // Update the cart button values
  updateCartValue(arrLocalStorageProduct);

  showToast("add",id);
};
