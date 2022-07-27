import { capitalize } from "utils/stringUtil"

class Performance {
    /**
     *
     * @param {string} kind - The kind of the performance.
     * @param {number} value - The 'score' of the performance.
     */
    constructor(kind, value) {
        this.kind = capitalize(kind)
        this.value = value
    }
}

export default Performance
