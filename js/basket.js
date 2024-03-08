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
 * Calculates the count of each unique number in an array and return a new
 * array where each item is an object with the 'id' representing the unique
 * number and 'count' from that number.
 *
 * @returns {{id: number, count: number}[]} - The result array consisting of
 * objects with 'id' and 'count' properties.
 */
function loadBasketCount() {
    const productIds = loadBasket();
    const count = {};
    for (let i = 0; i < productIds.length; i++) {
        if (count[productIds[i]]) {
            count[productIds[i]]++;
        } else {
            count[productIds[i]] = 1;
        }
    }

    const result = [];
    for (let num in count) {
        result.push({id: parseInt(num), count: count[num]});
    }
    return result;
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
    const badge = document.getElementById("basket-badge").querySelector('a > button');
    if (badge) {
        badge.innerText = (numProducts > 0) ? "Basket (" + numProducts + ")" : "Basket";
    }
}

export {
    addToBasket,
    loadBasket,
    loadBasketCount,
    saveBasket,
    clearBasket,
    updateBadge
}
