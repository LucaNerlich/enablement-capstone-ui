import {capitalize, shortenText} from "../util.js";
import {loadData} from "../api.js";

/**
 * @typedef {Object} Rating
 * @property {number} rate
 * @property {number} count
 *
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Rating} rating
 */
async function createProduct(main) {
    const productId = Number(new URLSearchParams(window.location.search).get("pid"));
    if (!productId) {
        console.error("No productId found for productId page.")
    }

    // Load and filter product
    const url = "/assets/products/all.json"
    /** @type {Product[]} */
    const products = await loadData(url);
    /** @type {Product | undefined} */
    const matchedProduct = products.find((product) => product.id === productId);
    document.title = capitalize(shortenText(matchedProduct?.title, 25));

    // Construct markup
    const content = main.querySelector(".content");

    // Headline
    const headline = document.createElement('h1');
    headline.textContent = matchedProduct.title;
    content.appendChild(headline);

    // Image
    const img = document.createElement('img');
    img.src = matchedProduct.image;
    img.alt = matchedProduct.title;
    img.loading = "lazy";
    content.appendChild(img);
}

createProduct(document.getElementById("product-main")).then(r => {
    console.debug("Basket loaded.")
});
