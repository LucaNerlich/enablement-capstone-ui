import {loadData} from "../api.js";
import {capitalize} from "../util.js";

async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).get("category");
    const isSingle = category !== null;
    document.title = !isSingle ? "Categories" : capitalize(category);

    // https://fakestoreapi.com/docs
    // https://github.com/keikaavousi/fake-store-api/issues/46
    // downloaded all to serve from local, except for images
    const url = isSingle ? "/assets/products/" + category + ".json" : "/assets/products/all.json"
    const products = await loadData(url);
    console.log("products", products);
}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
