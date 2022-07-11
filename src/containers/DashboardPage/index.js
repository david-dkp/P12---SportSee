import userService from "apis/UserService"

const DashboardPage = () => {
    userService.getUserAverageSessions("12").then((user) => {
        console.log(user)
    })

    return (
        <div>
            <h1>DashboardPage</h1>
        </div>
    )
}

export default DashboardPage
