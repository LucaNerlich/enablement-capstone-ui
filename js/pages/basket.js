import {clearBasket, updateBadge} from "../basket.js";

async function createBasket(main) {
    document.title = "Basket";
    console.log("main", main);

    updateBadge();
    main.querySelector('#clear-basket')?.addEventListener('click', () => clearBasket());
}

createBasket(document.getElementById("basket-main")).then(r => {
    console.debug("Basket loaded.")
});
