import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuaantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");
  let quantity = 1;
  let localStoragePrice = 0;

  // Get the data from localstorage
  let arrLocalStorageProduct = getCartProductFromLocalStorage();
  let existingProduct = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  // finally we will update the price in localstorage
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };

  updatedCart = arrLocalStorageProduct.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
  console.log(updatedCart);

  localStorage.setItem("cartProductLocalStorage", JSON.stringify(updatedCart));

  // Also we need to reflect the changes on the screen too
  productQuaantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  // ------------------------------------------------------
  // Calculating the cart total in our cartProducts page
  // ------------------------------------------------------

  updateCartProductTotal();
};
