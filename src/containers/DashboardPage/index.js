import realUserService from "apis/UserService"
import { useEffect, useState } from "react"
import fakeUserService from "apis/UserService/fakeUserService"
import DashboardPageComponent from "./components/DashboardPage"

const DashboardPage = () => {
    const userId = "12"
    const [isLoading, setIsLoading] = useState(true)
    const [performances, setPerformances] = useState([])
    const [averageSessions, setAverageSessions] = useState([])
    const [userActivity, setUserActivity] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const pathname = window.location.pathname

        const userService = pathname.includes("/fake")
            ? fakeUserService
            : realUserService

        const getPerformancePromise = userService.getUserPerformance(userId)
        const getAverageSessionPromise =
            userService.getUserAverageSessions(userId)
        const getUserActivityPromise = userService.getUserActivity(userId)
        const getUserPromise = userService.getUser(userId)

        Promise.all([
            getPerformancePromise,
            getAverageSessionPromise,
            getUserActivityPromise,
            getUserPromise,
        ])
            .then(
                ([performanceData, averageSessionData, userActivity, user]) => {
                    setPerformances(performanceData)
                    setAverageSessions(averageSessionData)
                    setUserActivity(userActivity)
                    setUser(user)
                    setIsLoading(false)
                }
            )
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <DashboardPageComponent
            averageSessions={averageSessions}
            performances={performances}
            userActivity={userActivity}
            user={user}
            isLoading={isLoading}
        />
    )
}

export default DashboardPage
