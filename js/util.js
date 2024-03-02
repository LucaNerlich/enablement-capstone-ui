/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
function capitalize(input) {
    if (!input) {
        return;
    }
    return input[0].toUpperCase() + input.slice(1);
}

export {
    capitalize
}
