import User from "domain/User"
import Session from "domain/Session"
import AverageSession from "domain/AverageSession"
import Performance from "domain/Performance"

/**
 * Maps a user dto to a domain user.
 * @param {object} userDto - The user dto coming from API.
 * @returns {User} - The user domain model.
 */
export const mapUserDtoToUser = (userDto) => {
    return new User(
        userDto.id,
        userDto.userInfos.firstName,
        userDto.userInfos.lastName,
        userDto.userInfos.age,
        userDto.keyData,
        userDto.todayScore
    )
}

/**
 * Maps a session dto to a domain session.
 * @param {object} sessionDto - The session dto coming from API.
 * @returns {Session} - The session domain model.
 */
export const mapSessionDtoToSession = (sessionDto) => {
    return new Session(
        new Date(sessionDto.day),
        sessionDto.calories,
        sessionDto.kilogram
    )
}

/**
 * Maps an average session dto to a domain average session.
 * @param {object} averageSessionDto - The average session dto coming from API.
 * @returns {AverageSession} - The average session domain model.
 */
export const mapAvergageSessionDtoToAverageSession = (averageSessionDto) => {
    return new AverageSession(
        averageSessionDto.day,
        averageSessionDto.sessionLength
    )
}

/**
 *
 * @param {object} data - The performance data dto coming from API.
 * @param {object} kind - An object that map a kind id to its name.
 * @returns {Performance} - The performance domain model.
 */
export const mapPerformanceDtoToPerformance = (data, kind) => {
    return new Performance(kind[data.kind], data.value)
}
