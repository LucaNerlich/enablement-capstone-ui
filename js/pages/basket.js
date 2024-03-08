import {clearBasket, loadBasketCount} from "../basket.js";

async function createBasket(main) {
    document.title = "Basket";
    console.log("main", main);

    main.querySelector('#clear-basket')?.addEventListener('click', () => clearBasket());
    const basketProductList = main.querySelector('#basket-product-list');

    const basketCount = loadBasketCount();
    basketCount.forEach(product => {
        const productListItem = document.createElement('li');
        productListItem.innerText = product.id + " x" + product.count;
        basketProductList.appendChild(productListItem);
    })
}

createBasket(document.getElementById("basket-main")).then(r => {
    console.debug("Basket loaded.")
});
