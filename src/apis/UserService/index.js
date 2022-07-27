/* eslint-disable no-unused-vars */
import AverageSession from "domain/AverageSession"
import Session from "domain/Session"
import User from "domain/User"
import {
    user,
    userActivity,
    userAverageSessions,
    userPerformance,
} from "./endpoints"

import {
    mapAvergageSessionDtoToAverageSession,
    mapPerformanceDtoToPerformance,
    mapSessionDtoToSession,
    mapUserDtoToUser,
} from "./mappers"

/**
 *
 * @param {string} id - The id of the user.
 * @returns {Promise<User>} - A promise that resolves to the user.
 */
const getUser = async (id) => {
    const response = await fetch(user(id))

    if (response.status === 200) {
        const parsedData = await response.json()
        return mapUserDtoToUser(parsedData.data)
    }

    return await response.json()
}

/**
 *
 * @param {string} id - The id of the user.
 * @returns {Promise<Array<Session>>} - A promise that resolves to the list of sessions of the user.
 */
const getUserActivity = async (id) => {
    const response = await fetch(userActivity(id))

    if (response.status === 200) {
        const parsedData = await response.json()
        return parsedData.data.sessions.map((session) =>
            mapSessionDtoToSession(session)
        )
    }

    return await response.json()
}

/**
 *
 * @param {string} id - The id of the user.
 * @returns {Promise<Array<AverageSession>>} - A promise that resolves to the list of average sessions of the user.
 */
const getUserAverageSessions = async (id) => {
    const response = await fetch(userAverageSessions(id))

    if (response.status === 200) {
        const parsedData = await response.json()
        return parsedData.data.sessions.map((session) => {
            return mapAvergageSessionDtoToAverageSession(session)
        })
    }

    return await response.json()
}

/**
 *
 * @param {string} id - The id of the user.
 * @returns {Promise<Array<Performance>>} - A promise that resolves to the list of performances of the user.
 */
const getUserPerformance = async (id) => {
    const response = await fetch(userPerformance(id))

    if (response.status === 200) {
        const parsedData = await response.json()
        return parsedData.data.data.map((data) => {
            return mapPerformanceDtoToPerformance(data, parsedData.data.kind)
        })
    }

    return await response.json()
}

const userService = {
    getUser,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}

export default userService
