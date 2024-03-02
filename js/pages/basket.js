async function createBasket(main) {
    document.title = "Basket";
}

createBasket(document.getElementById("basket-main")).then(r => {
    console.debug("Basket loaded.")
});
