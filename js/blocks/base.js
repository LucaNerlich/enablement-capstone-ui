/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {
    return document.createElement("header");
}

/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
async function loadFooter(footer) {
    return document.createElement("footer");
}

async function setupTheme(themeSwitcher) {
    // set default theme
    document.documentElement.setAttribute('data-theme', 'light');
    console.log("document.documentElement", document.documentElement);


    // setup theme-switcher button
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        });
    }
}

export {
    loadHeader,
    loadFooter,
    setupTheme
}
