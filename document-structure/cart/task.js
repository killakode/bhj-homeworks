let productStorage = document.querySelector('.cart__products');   
 let productControls = document.querySelectorAll('.product__quantity-controls');



productControls.forEach(control => {
    let buttonAddValue = control.querySelector('.product__quantity-control_inc');
    let buttonRemoveValue = control.querySelector('.product__quantity-control_dec');
    let productQuantityValue = control.querySelector('.product__quantity-value');

    buttonAddValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) + 1;
    });

    buttonRemoveValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) - 1;
        if(productQuantityValue.textContent < 1) {
            productQuantityValue.textContent = 1;
        }
    });
});
    let addToCartButtons = document.querySelectorAll('.product__add');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let product = event.target.closest('.product');
        let productId = product.dataset.id;
        let productImage = product.querySelector('.product__image').src;
        let productCount = parseInt(product.querySelector('.product__quantity-value').textContent);
        
        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if(cartProduct) {
            let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + productCount;
            cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
            `;
            document.querySelector('.cart__products').appendChild(cartProduct);
        }
    });
});

