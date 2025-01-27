import products from "../api/product.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProduct = getCartProductFromLocalStorage();

let filterProducts = products.filter((curProd) => {
  return cartProduct.some((curElem) => curElem.id === curProd.id);
});
// console.log(filterProducts);

//-------------------------------------------------
//to update the addToCart Page
//-------------------------------------------------

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, name, image, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const lsActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productQuantity").textContent =
      lsActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      (lsActualData.price).toFixed(2);

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProductFromCart(id));

    cartElement.appendChild(productClone);
  });
};

//-------------------------------------------------------
// Showing the cart products
// ------------------------------------------------------

showCartProduct();

// ------------------------------------------------------
// Calculating the cart total in our cartProducts page
// ------------------------------------------------------

updateCartProductTotal();
