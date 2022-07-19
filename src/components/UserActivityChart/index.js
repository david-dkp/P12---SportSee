import Session from "domain/Session"
import PropTypes from "prop-types"
import { useMemo, useCallback } from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { addComas } from "utils/numberUtils"
import styles from "./styles.module.css"

const UserActivityChart = ({ sessions }) => {
    const data = useMemo(() => {
        return sessions.map((session, i) => {
            return {
                weight: session.kilogram,
                calories: session.calories,
                label: i + 1,
            }
        })
    }, [sessions])

    const renderTooltip = useCallback((props) => {
        if (!props.active) {
            return null
        }

        const weight = props.payload[0].value
        const calories = props.payload[1].value

        return (
            <div className={styles["tooltip"]}>
                <span>{weight}kg</span>
                <span>{addComas(calories)}Kcal</span>
            </div>
        )
    }, [])

    return (
        <ResponsiveContainer>
            <BarChart
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 20,
                }}
                className={styles["chart"]}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip content={renderTooltip} />
                <Legend verticalAlign="top" align="right" />
                <Bar name="Poids (kg)" dataKey="weight" fill="#282D30" />
                <Bar
                    name="Calories brûlées (kCal)"
                    dataKey="calories"
                    fill="#E60000"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

UserActivityChart.propTypes = {
    sessions: PropTypes.arrayOf(PropTypes.instanceOf(Session)),
}

UserActivityChart.defaultProps = {
    sessions: [],
}

export default UserActivityChart
