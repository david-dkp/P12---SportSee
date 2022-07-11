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

const getUser = async (id) => {
    const response = await fetch(user(id))

    if (response.status === 200) {
        const parsedData = await response.json()
        return mapUserDtoToUser(parsedData.data)
    }

    return await response.json()
}

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
