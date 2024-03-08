/**
 * @param {number} productId
 */
function addToBasket(productId) {
    const productIds = loadBasket();
    productIds.push(productId);
    productIds.sort();
    saveBasket(productIds);
}

const basketKey = 'basket';

/**
 * @returns {number[]}
 */
function loadBasket() {
    let storedBasket = localStorage.getItem(basketKey);
    if (!storedBasket) {
        storedBasket = [];
        saveBasket(storedBasket);
    } else {
        storedBasket = JSON.parse(storedBasket);
    }
    return storedBasket;
}

/**
 * @param {number[]} productIds
 */
function saveBasket(productIds) {
    localStorage.setItem(basketKey, JSON.stringify(productIds));
    updateBadge();
}

function clearBasket() {
    saveBasket([]);
}

/**
 * Updates the badge displaying the number of products in the basket.
 * If there are no products in the basket, the badge will display "Basket".
 * If there are products in the basket, the badge will display "Basket" followed by the number of products.
 *
 * @return {void}
 */
function updateBadge() {
    const numProducts = loadBasket()?.length;
    const badge = document.getElementById("basket-badge").querySelector('a');
    if (badge) {
        badge.innerText = (numProducts > 0) ? "Basket " + numProducts : "Basket";
    }
}

export {
    addToBasket,
    loadBasket,
    saveBasket,
    clearBasket,
    updateBadge
}
