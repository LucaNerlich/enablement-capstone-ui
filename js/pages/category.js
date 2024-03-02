import {loadData} from "../api.js";
import {capitalize} from "../util.js";

async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).getAll("category");
    if (!category) {
        console.error("No category found for product page.");
    }
    const isSingle = category.length === 1;
    document.title = !isSingle ? "Categories" : capitalize(category[0]);

    const categories = await loadData('/assets/categories.json');
    const categoryData = isSingle ? {[category]: categories[category]} : categories;

    // loop over categories and return all aggreagted product ids
    const productIds = Object.values(categoryData).reduce((acc, category) => {
        if (category.products && Array.isArray(category.products)) {
            return acc.concat(category.products);
        } else {
            return acc;
        }
    }, []);
    const products = await loadData('/assets/products.json');
    const matchingProducts = products.filter(item => productIds.includes(item.id));
    console.log("matchingProducts", matchingProducts);
}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
