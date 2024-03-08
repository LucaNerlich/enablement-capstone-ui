import {clearBasket, loadBasketCount} from "../basket.js";
import {loadData} from "../api.js";
import {shortenText} from "../util.js";

async function createBasket(main) {
    document.title = "Basket";
    console.log("main", main);

    main.querySelector('#clear-basket')?.addEventListener('click', () => {
        clearBasket();
        refreshBasketList();
    });

    const products = await loadData('/assets/products/all.json');
    refreshBasketList();

    function refreshBasketList() {
        const basketProductList = main.querySelector('#basket-product-list');
        basketProductList.innerHTML = "";
        const basketSumElement = main.querySelector('#basket-sum')?.querySelector('span');
        let basketSum = 0;
        const basketCount = loadBasketCount();
        basketCount.forEach(product => {
            const productListItem = document.createElement('li');
            const matchedProduct = getProductById(product.id, products);
            const itemSum = matchedProduct.price * product.count;
            basketSum += itemSum;
            productListItem.innerHTML = `
                <span>${product.count}x <strong>${shortenText(matchedProduct.title, 25)}</strong> | $${itemSum}</span>
            `
            basketProductList.appendChild(productListItem);
        })

        basketSumElement.innerText = "$" + Math.round(basketSum * 100) / 100
    }


    function getProductById(productId, products) {
        return products.find(p => p.id === productId);
    }
}

createBasket(document.getElementById("basket-main")).then(r => {
    console.debug("Basket loaded.")
});
