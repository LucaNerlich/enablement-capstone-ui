function createFooter(footer) {
    footer.innerHTML = `
<div class="footer-wrapper">
      <div class="footer-links">
            <div class="footer-links_column">
                  <h3>Account</h3>
                  <ul>
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>Order Status</li>
                  </ul>
            </div>
            <div class="footer-links_column">
                  <h3>About Us</h3>
                  <ul>
                        <li>Our Story</li>
                        <li>Careers</li>
                  </ul>
            </div>
            <div class="footer-links_column">
                  <h3>Help</h3>
                  <ul>
                        <li>Contact Us</li>
                        <li>Order Status</li>
                        <li>Returns</li>
                  </ul>
            </div>
            <div class="footer-links_column">
                  <h3>Follow Us!</h3>
                  <ul>
                        <li>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.</p>
                        </li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>X</li>
                  </ul>
            </div>
      </div>
      <div class="footer-company">
            <p class="logo-name">VENIA</p>
            <p>© Company Name Address Ave, City Name, State ZIP</p>
             <div>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <button id="theme-switcher">Switch Theme</button>
            </div>
      </div>
</div>
  `;
}

export {
    createFooter
}
