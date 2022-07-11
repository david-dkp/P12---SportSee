import userService from "apis/UserService"
import { useEffect, useState } from "react"
import DashboardPageComponent from "./components/DashboardPage"

const DashboardPage = () => {
    const userId = "12"
    const [isLoading, setIsLoading] = useState(true)
    const [performances, setPerformances] = useState([])
    const [averageSessions, setAverageSessions] = useState([])

    useEffect(() => {
        const getPerformancePromise = userService.getUserPerformance(userId)
        const getAverageSessionPromise =
            userService.getUserAverageSessions(userId)

        Promise.all([getPerformancePromise, getAverageSessionPromise])
            .then(([performanceData, averageSessionData]) => {
                setPerformances(performanceData)
                setAverageSessions(averageSessionData)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <DashboardPageComponent
            averageSessions={averageSessions}
            performances={performances}
            isLoading={isLoading}
        />
    )
}

export default DashboardPage
