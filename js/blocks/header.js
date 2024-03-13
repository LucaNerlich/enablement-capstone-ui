import {updateBadge} from "../basket.js";

/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 */
async function createHeader(header) {
    header.innerHTML = `
  <div class="logo">
    <a href="/"><span>V</span>ENIA</a>
  </div>
  <nav class="mobile-nav">
    <ul>
      <li><a href="/"><strong>Home</strong></a></li>
      <li><a href="/pages/category.html?category=women">Women</a></li>
      <li><a href="/pages/category.html?category=men">Men</a></li>
      <li><a href="/pages/category.html?category=electronics">Electronics</a></li>
      <li><a href="/pages/category.html?category=jewelery">Jewelery</a></li>
      <li><a href="/pages/category.html">All</a></li>
    </ul>
  </nav>
  <a id="basket-badge" href="/pages/basket.html">
    <button>BASKET</button>
  </a>
  <div class="hamburger-menu">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  `;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerMenu.addEventListener('click', function () {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
    updateBadge();
}

export {
    createHeader
}
