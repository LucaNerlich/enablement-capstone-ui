/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 */
function createHeader(header) {
    header.innerHTML = `
      <ul>
        <li class="logo-name"><a href="/">VENIA</a></li>
        <li>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pages/category.html?category=women">Women</a></li>
                <li><a href="/pages/category.html?category=men">Men</a></li>
                <li><a href="/pages/category.html?category=electronics">Electronics</a></li>
                <li><a href="/pages/category.html?category=jewelery">Jewelery</a></li>
                <li><a href="/pages/category.html">All</a></li>
            </ul>
        </li>
        <li><a href="/pages/basket.html">BASKET</a></li>
    </ul>
  `;
}

export {
    createHeader
}
