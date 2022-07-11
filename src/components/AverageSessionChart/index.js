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
            <LineChart
                width={300}
                height={300}
                data={data}
                margin={{
                    top: 100,
                    bottom: 20,
                    left: 20,
                    right: 20,
                }}
            >
                <XAxis
                    stroke="rgba(255, 255, 255, 0.5)"
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
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
    averageSessions: PropTypes.arrayOf(PropTypes.instanceOf(AverageSession)),
}

export default AverageSessionChart
