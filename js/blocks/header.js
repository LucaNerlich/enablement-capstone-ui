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
                <li>Home</li>
                <li>Women</li>
                <li>Men</li>
                <li>Electronics</li>
                <li>Jewellery</li>
            </ul>
        </li>
        <li> BASKET</li>
    </ul>
  `;
}

export {
    createHeader
}
