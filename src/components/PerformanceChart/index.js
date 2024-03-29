import Performance from "domain/Performance"
import PropTypes from "prop-types"
import { PolarAngleAxis, PolarGrid, RadarChart, Radar } from "recharts"
import styles from "./styles.module.css"

const PerformanceChart = ({ performances }) => {
    return (
        <RadarChart
            outerRadius={90}
            className={styles.chart}
            data={performances}
            width={300}
            height={300}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis tick={{ fill: "white" }} dataKey={"kind"} />
            <Radar dataKey={"value"} fill="#e60000" opacity={"0.7"} />
        </RadarChart>
    )
}

PerformanceChart.propTypes = {
    /**
     * List of performances to display in the chart
     */
    performances: PropTypes.arrayOf(PropTypes.instanceOf(Performance)),
}

export default PerformanceChart
