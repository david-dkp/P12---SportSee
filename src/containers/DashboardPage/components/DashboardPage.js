import Performance from "domain/Performance"
import AverageSession from "domain/AverageSession"
import PropTypes from "prop-types"
import PerformanceChart from "components/PerformanceChart"
import AverageSessionChart from "components/AverageSessionChart"
import ScoreChart from "components/ScoreChart"
import User from "domain/User"
import KeyDataItem from "components/KeyDataItem"
import FireIcon from "components/Icons/FireIcon"

const DashboardPage = ({
    performances,
    averageSessions,
    userActivity,
    user,
    isLoading,
}) => {
    console.log(user)
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <PerformanceChart performances={performances} />
                    <AverageSessionChart averageSessions={averageSessions} />
                    <ScoreChart scorePercent={user.todayScore} />
                    <KeyDataItem
                        color={"#FF0000"}
                        title={"Calories"}
                        value={"1,930kCal"}
                        icon={FireIcon}
                    />
                </>
            )}
        </div>
    )
}

DashboardPage.propTypes = {
    isLoading: PropTypes.bool,
    performances: PropTypes.arrayOf(PropTypes.instanceOf(Performance)),
    averageSessions: PropTypes.arrayOf(PropTypes.instanceOf(AverageSession)),
    user: PropTypes.instanceOf(User),
}

export default DashboardPage
