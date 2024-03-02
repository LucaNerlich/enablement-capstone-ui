/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 */
function createHeader(header) {
    header.innerHTML = `
      <ul>
        <li class="logo-name">VENIA</li>
        <li>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pages/category.html?category=women">Women</a></li>
                <li><a href="/pages/category.html?category=men">Men</a></li>
                <li><a href="/pages/category.html?category=electronics">Electronics</a></li>
                <li><a href="/pages/category.html?category=jewellery">Jewellery</a></li>
                <li><a href="/pages/category.html?category=men&category=women&category=electronics&category=jewellery">All</a></li>
            </ul>
        </li>
        <li><a href="/pages/basket.html">BASKET</a></li>
    </ul>
  `;
}

export {
    createHeader
}
