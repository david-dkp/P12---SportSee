import Performance from "domain/Performance"
import AverageSession from "domain/AverageSession"
import PropTypes from "prop-types"
import PerformanceChart from "components/PerformanceChart"
import AverageSessionChart from "components/AverageSessionChart"
import ScoreChart from "components/ScoreChart"
import User from "domain/User"
import KeyDataItem from "components/KeyDataItem"
import FireIcon from "components/Icons/FireIcon"
import styles from "../styles.module.css"
import { useMemo } from "react"
import ChickenIcon from "components/Icons/ChickenIcon"
import AppleIcon from "components/Icons/AppleIcon"
import CheeseBurgerIcon from "components/Icons/CheeseBurgerIcon"
import { addComas } from "utils/numberUtils"
import Session from "domain/Session"
import UserActivityChart from "components/UserActivityChart"

const getKeyDataProp = (key, value) => {
    switch (key) {
        case "calorieCount": {
            return {
                key: "Calories",
                color: "#FF0000",
                title: "Calories",
                value: addComas(value) + "kCal",
                icon: FireIcon,
            }
        }
        case "carbohydrateCount": {
            return {
                key: "Carbohydrates",
                color: "#FDCC0C",
                title: "Glucides",
                value: value + "g",
                icon: AppleIcon,
            }
        }
        case "lipidCount": {
            return {
                key: "Lipids",
                color: "#FD5181",
                title: "Lipides",
                value: value + "g",
                icon: CheeseBurgerIcon,
            }
        }
        case "proteinCount": {
            return {
                key: "Proteins",
                color: "#4AB8FF",
                title: "Proteines",
                value: value + "g",
                icon: ChickenIcon,
            }
        }
        default: {
            return null
        }
    }
}

const DashboardPage = ({
    performances,
    averageSessions,
    userActivity,
    user,
    isLoading,
    error,
}) => {
    const keyDatas = useMemo(
        () =>
            user &&
            Object.entries(user.keyData).map(([key, value]) => {
                return getKeyDataProp(key, value)
            }),
        [user]
    )

    if (error !== null) {
        return (
            <div className={styles["error-message"]}>
                An error has occured: {error}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h2 className={styles["header-title"]}>
                        Bonjour{" "}
                        <span className={styles["user-name"]}>
                            {user.firstName}
                        </span>
                    </h2>
                    <p className={styles["header-description"]}>
                        Félicitation ! Vous avez explosé vos objectifs hier
                    </p>
                    <div className={styles["dashboard-container"]}>
                        <div className={styles["dashboard-charts-container"]}>
                            <UserActivityChart sessions={userActivity} />
                            <div
                                className={
                                    styles["dashboard-sub-charts-container"]
                                }
                            >
                                <AverageSessionChart
                                    averageSessions={averageSessions}
                                />
                                <PerformanceChart performances={performances} />
                                <ScoreChart scorePercent={user.todayScore} />
                            </div>
                        </div>
                        <div className={styles["dashboard-key-data-items"]}>
                            {keyDatas.map((keyData) => (
                                <KeyDataItem {...keyData} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

DashboardPage.propTypes = {
    /**
     * The loading state of the page.
     */
    isLoading: PropTypes.bool,
    /**
     * The list of performances of the user.
     */
    performances: PropTypes.arrayOf(PropTypes.instanceOf(Performance)),
    /**
     * The list of average sessions of the user.
     */
    averageSessions: PropTypes.arrayOf(PropTypes.instanceOf(AverageSession)),
    /**
     * The user data.
     */
    user: PropTypes.instanceOf(User),
    /**
     * The activity of the user
     */
    userActivity: PropTypes.arrayOf(PropTypes.instanceOf(Session)),
    /**
     * The error message if it has one.
     */
    error: PropTypes.string,
}

export default DashboardPage
