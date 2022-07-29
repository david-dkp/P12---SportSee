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

import fakeData from "assets/fakeData.json"

const getUser = async (id) => {
    return mapUserDtoToUser(fakeData.user.data)
}

const getUserActivity = async (id) => {
    return fakeData.activity.data.sessions.map((session) =>
        mapSessionDtoToSession(session)
    )
}

const getUserAverageSessions = async (id) => {
    return fakeData["average-sessions"].data.sessions.map((session) => {
        return mapAvergageSessionDtoToAverageSession(session)
    })
}

const getUserPerformance = async (id) => {
    return fakeData.performance.data.data.map((data) => {
        return mapPerformanceDtoToPerformance(
            data,
            fakeData.performance.data.kind
        )
    })
}

const userService = {
    getUser,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}

export default userService
