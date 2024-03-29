import AverageSession from "domain/AverageSession"
import PropTypes from "prop-types"
import { LineChart, XAxis, Line, Tooltip } from "recharts"
import { dayNumberToLetter } from "utils/dayUtils"
import { useCallback, useMemo, useState } from "react"
import styles from "./styles.module.css"

const AverageSessionChart = ({ averageSessions }) => {
    const [chartOverlayLeft, setChartOverlayLeft] = useState(300)
    const data = useMemo(() => {
        const data = averageSessions.map((averageSession) => {
            return {
                label: dayNumberToLetter(averageSession.day),
                value: averageSession.sessionLength,
            }
        })

        return data
    }, [averageSessions])

    const renderTooltip = useCallback((props) => {
        if (!props.active) {
            return null
        }
        const x = props.coordinate.x
        setChartOverlayLeft(x)
        return (
            <div className={styles.tooltip}>{props.payload[0].value} mins</div>
        )
    }, [])

    return (
        <div className={styles.chart}>
            <div
                className={styles["chart-overlay"]}
                style={{ left: chartOverlayLeft }}
            />
            <p className={styles.title}>Durée moyenne des sessions</p>
            <LineChart
                data={data}
                margin={{
                    top: 100,
                    bottom: 20,
                    left: 20,
                    right: 20,
                }}
                width={300}
                height={300}
            >
                <XAxis
                    stroke="rgba(255, 255, 255, 0.5)"
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                />
                <Tooltip cursor={false} content={renderTooltip} />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </div>
    )
}

AverageSessionChart.propTypes = {
    /**
     * Array of AverageSession objects to display in the chart
     */
    averageSessions: PropTypes.arrayOf(PropTypes.instanceOf(AverageSession)),
}

export default AverageSessionChart
