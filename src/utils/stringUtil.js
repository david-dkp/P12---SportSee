/**
 * Used to Capitalize a string.
 * Exemple: hello -> Hello
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
