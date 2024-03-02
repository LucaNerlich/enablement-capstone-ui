import {loadData} from "../api.js";

async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).get("category");
    if (!category) {
        console.error("No category found for product page.")
    }

    const categories = await loadData('/assets/categories.json');
    console.log("categories", categories);
}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
