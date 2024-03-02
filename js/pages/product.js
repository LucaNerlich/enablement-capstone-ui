import {loadData} from "../api.js";

async function createProduct(main) {
    const product = new URLSearchParams(window.location.search).get("product");
    if (!product) {
        console.error("No product found for product page.")
    }

    const products = await loadData('/assets/products.json');
    console.log("products", products);
}

createProduct(document.getElementById("product-main")).then(r => {
    console.debug("Basket loaded.")
});
