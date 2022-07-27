class Session {
    /**
     *
     * @param {Date} date - The date of the session.
     * @param {number} calories - The calories burned during the session.
     * @param {number} kilogram - The weight of the user after the session.
     */
    constructor(date, calories, kilogram) {
        this.calories = calories
        this.date = date
        this.kilogram = kilogram
    }
}

export default Session
