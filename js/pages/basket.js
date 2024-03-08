import {clearBasket, loadBasketCount} from "../basket.js";
import {loadData} from "../api.js";

async function createBasket(main) {
    document.title = "Basket";
    console.log("main", main);

    main.querySelector('#clear-basket')?.addEventListener('click', () => {
        clearBasket();
        refreshBasketList();
    });


    const products = await loadData('/assets/products/all.json');
    refreshBasketList();
    console.log("products", products);


    function refreshBasketList() {
        const basketProductList = main.querySelector('#basket-product-list');
        basketProductList.innerHTML = "";
        const basketSumElement = main.querySelector('#basket-sum')?.querySelector('span');
        let basketSum = 0;
        const basketCount = loadBasketCount();
        basketCount.forEach(product => {
            const productListItem = document.createElement('li');
            const itemSum = getPrice(product.id, products) * product.count;
            basketSum += itemSum;
            productListItem.innerText = product.id + " x" + product.count + " $" + itemSum;
            basketProductList.appendChild(productListItem);
        })

        basketSumElement.innerText = "$" + basketSum;
    }

    function getPrice(productId, products) {
        const product = products.find(p => p.id === productId);
        return product ? product.price : null;
    }
}

createBasket(document.getElementById("basket-main")).then(r => {
    console.debug("Basket loaded.")
});
