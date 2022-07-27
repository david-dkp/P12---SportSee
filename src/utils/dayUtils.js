/**
 * Get the day's letter from a number.
 * @param {number} dayNumber - The day number of the week (1-7)
 * @returns {string} - The letter representing the day (L-M-M-J-V-S-D)
 */
export const dayNumberToLetter = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            return "L"
        case 2:
            return "M"
        case 3:
            return "M"
        case 4:
            return "J"
        case 5:
            return "V"
        case 6:
            return "S"
        case 7:
            return "D"
        default:
            return "?"
    }
}
