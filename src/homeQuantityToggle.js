export const homeQuantityToggle = (event,id,stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuaantity = currentCardElement.querySelector('.productQuantity');
    // console.log(productQuaantity);

    let quantity = parseInt(productQuaantity.getAttribute("data-quantity")) || 1;
    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity +=1;
        } else if(quantity===stock){
            quantity = stock;
        }
    }

    if(event.target.className ==='cartDecrement'){
        if(quantity > 1){
            quantity -= 1;
        }
    }
    productQuaantity.innerText = quantity;
    productQuaantity.setAttribute("data-quantity",quantity.toString());
    return quantity;   
}