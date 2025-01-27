import './style.css'

import products from '../api/product.json';
import { showProductContainer } from './homeProductCards';
// console.log(products);

// Call the function to display all the products as a cart
showProductContainer(products)

