class User {
    /**
     *
     * @param {string} id - The id of the user.
     * @param {string} firstName - The first name of the user.
     * @param {string} lastName - The last name of the user.
     * @param {number} age - The age of the user.
     * @param {object} keyData - The key data of the user.
     * @param {number} todayScore - Today's score of the user in percent.
     */
    constructor(id, firstName, lastName, age, keyData, todayScore) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.keyData = keyData
        this.todayScore = todayScore
    }
}

export default User
