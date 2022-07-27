/**
 * Getting the formatted number with comas.
 * Exemple: 1000000 -> 1,000,000
 * @param {number} number - The number to be formatted.
 * @returns {string} - The formatted number with comas.
 */
export const addComas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
