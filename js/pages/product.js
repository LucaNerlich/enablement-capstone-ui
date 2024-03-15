import {capitalize, shortenText} from "../util.js";
import {loadData} from "../api.js";

async function createProduct(main) {
    const productId = Number(new URLSearchParams(window.location.search).get("pid"));
    if (!productId) {
        console.error("No productId found for productId page.")
    }

    const url = "/assets/products/all.json"
    const products = await loadData(url);
    const matchedProduct = products.find((product) => product.id === productId);

    document.title = capitalize(shortenText(matchedProduct?.title, 25));
}

createProduct(document.getElementById("product-main")).then(r => {
    console.debug("Basket loaded.")
});
