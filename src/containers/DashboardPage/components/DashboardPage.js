import Performance from "domain/Performance"
import AverageSession from "domain/AverageSession"
import PropTypes from "prop-types"
import PerformanceChart from "components/PerformanceChart"
import AverageSessionChart from "components/AverageSessionChart"

const DashboardPage = ({ performances, averageSessions }) => {
    return (
        <div>
            <PerformanceChart performances={performances} />
            <AverageSessionChart averageSessions={averageSessions} />
        </div>
    )
}

DashboardPage.propTypes = {
    isLoading: PropTypes.bool,
    performances: PropTypes.arrayOf(PropTypes.instanceOf(Performance)),
    averageSessions: PropTypes.arrayOf(PropTypes.instanceOf(AverageSession)),
}

export default DashboardPage
