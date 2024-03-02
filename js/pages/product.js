async function createProduct(main) {
    const product = new URLSearchParams(window.location.search).get("product");
    if (!product) {
        console.error("No product found for product page.")
    }
}

createProduct(document.getElementById("product-main")).then(r => {
    console.debug("Basket loaded.")
});
