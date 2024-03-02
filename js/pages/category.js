async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).get("category");
    if (!category) {
        console.error("No category found for product page.")
    }

}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
