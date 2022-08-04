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
        const maxCalories = Math.max(
            ...sessions.map((session) => session.calories)
        )
        const maxWeight = Math.max(
            ...sessions.map((session) => session.kilogram)
        )

        return sessions.map((session, i) => {
            const mappedCalories = (session.calories / maxCalories) * maxWeight
            return {
                weight: session.kilogram,
                mappedCalories: mappedCalories,
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
        const calories = props.payload[1].payload.calories

        return (
            <div className={styles["tooltip"]}>
                <span>{weight}kg</span>
                <span>{addComas(calories)}Kcal</span>
            </div>
        )
    }, [])

    return (
        <ResponsiveContainer className={styles["container"]} height={300}>
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
                <CartesianGrid strokeDasharray="4" vertical={false} />
                <XAxis tickLine={false} tickMargin={10} dataKey="label" />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    padding={{
                        top: 70,
                    }}
                    tickMargin={10}
                    orientation="right"
                    domain={[0, "dataMax+10"]}
                />
                <Tooltip content={renderTooltip} />
                <Legend iconType="circle" verticalAlign="top" align="right" />
                <Bar
                    name="Poids (kg)"
                    dataKey="weight"
                    fill="#282D30"
                    radius={[10, 10, 0, 0]}
                    maxBarSize={13}
                />
                <Bar
                    name="Calories brûlées (kCal)"
                    dataKey="mappedCalories"
                    fill="#E60000"
                    radius={[10, 10, 0, 0]}
                    maxBarSize={13}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

UserActivityChart.propTypes = {
    /**
     * The sessions to display in the chart.
     */
    sessions: PropTypes.arrayOf(PropTypes.instanceOf(Session)),
}

UserActivityChart.defaultProps = {
    sessions: [],
}

export default UserActivityChart
