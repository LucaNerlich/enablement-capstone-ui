import {loadData} from "../api.js";
import {capitalize} from "../util.js";
import {addToBasket} from "../basket.js";

async function createCategory(main) {
    const category = new URLSearchParams(window.location.search).get("category");
    const isSingle = category !== null;
    document.title = !isSingle ? "Categories" : capitalize(category);

    // Setup Category Headline
    const headline = main.querySelector("#category-main .content h1");
    headline.textContent = isSingle ? "All " + category + " products" : "All products"

    // TODO load data non-blocking somewhere else

    // https://fakestoreapi.com/docs
    // https://github.com/keikaavousi/fake-store-api/issues/46
    // downloaded all to serve from local, except for images
    const url = isSingle ? "/assets/products/" + category + ".json" : "/assets/products/all.json"
    const products = await loadData(url);

    const productsSection = document.getElementById("products");
    for (const product of products) {
        productsSection.appendChild(await createProductTeaser(product));
    }
}

async function createProductTeaser(product) {
    const productTeaser = document.createElement("div");
    productTeaser.classList.add("product-teaser");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.loading = "lazy";
    productTeaser.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = product.title;
    productTeaser.appendChild(title);

    const price = document.createElement("span");
    price.classList.add('price');
    price.textContent = "$" + product.price;
    productTeaser.appendChild(price);

    // create "add to basket button
    const button = document.createElement("button");
    button.innerHTML = `
    <div>
        <span>Add</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
        <path
            d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
    </div>
    `;
    button.setAttribute("product-id", product.id);
    button.addEventListener('click', () => addToBasket(product.id))
    productTeaser.appendChild(button);

    return productTeaser;
}

createCategory(document.getElementById("category-main")).then(r => {
    console.debug("Category loaded.")
});
