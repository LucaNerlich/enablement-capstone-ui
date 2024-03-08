import {capitalize} from "../util.js";

async function createProduct(main) {
    const product = new URLSearchParams(window.location.search).get("product");
    if (!product) {
        console.error("No product found for product page.")
    }

    document.title = capitalize(product);
}

createProduct(document.getElementById("product-main")).then(r => {
    console.debug("Basket loaded.")
});
