import userService from "apis/UserService"
import PerformanceChart from "components/PerformanceChart"
import { useState } from "react"

const DashboardPage = () => {
    const [performances, setPerformances] = useState([])
    console.log(performances)
    userService.getUserPerformance("12").then(setPerformances)

    return <PerformanceChart performances={performances} />
}

export default DashboardPage
