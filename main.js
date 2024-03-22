
let products = document.getElementsByClassName('product');
let totalPriceElement = document.getElementById('total-price');
let totalQuantityElement = document.getElementById('total-quantity');

for(let product of products) {
    let quantityElement = product.querySelector('.product-quantity-count');
    let addElement = product.querySelector('.product-quantity-add');
    let removeElement = product.querySelector('.product-quantity-remove');
    let price = parseInt(product.querySelector('.product-price').innerText);

    addElement.onclick = function() {
        let quantity = parseInt(quantityElement.innerText);
        let totalQuantity = parseInt(totalQuantityElement.innerText);
        quantityElement.innerText = quantity + 1;
        totalQuantityElement.innerText = totalQuantity + 1;
        totalPriceElement.innerText = parseInt(totalPriceElement.innerText) + price;
    };

    removeElement.onclick = function() {
        let quantity = parseInt(quantityElement.innerText);
        let totalQuantity = parseInt(totalQuantityElement.innerText);
        if(quantity > 0) {
            quantityElement.innerText = quantity - 1;
            totalQuantityElement.innerText = totalQuantity - 1;
            totalPriceElement.innerText = parseInt(totalPriceElement.innerText) - price;
        }
    };
}