import {loadData} from "../api.js";
import {capitalize} from "../util.js";

async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).getAll("category");
    if (!category) {
        console.error("No category found for product page.");
    }
    document.title = category.length > 1 ? "Categories" : capitalize(category[0]);

    const categories = await loadData('/assets/categories.json');
    console.log("categories", categories);
}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
