import User from "domain/User"
import Session from "domain/Session"
import AverageSession from "domain/AverageSession"
import Performance from "domain/Performance"

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

export const mapSessionDtoToSession = (sessionDto) => {
    return new Session(
        new Date(sessionDto.day),
        sessionDto.calories,
        sessionDto.kilogram
    )
}

export const mapAvergageSessionDtoToAverageSession = (averageSessionDto) => {
    return new AverageSession(
        averageSessionDto.day,
        averageSessionDto.sessionLength
    )
}

export const mapPerformanceDtoToPerformance = (data, kind) => {
    return new Performance(kind[data.kind], data.value)
}
