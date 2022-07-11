import { capitalize } from "utils/stringUtil"

class Performance {
    constructor(kind, value) {
        this.kind = capitalize(kind)
        this.value = value
    }
}

export default Performance
