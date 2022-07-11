import Performance from "domain/Performance"
import PropTypes from "prop-types"
import { PolarAngleAxis, PolarGrid, RadarChart, Radar } from "recharts"
import styles from "./styles.module.css"

const PerformanceChart = ({ performances }) => {
    return (
        <RadarChart
            outerRadius={90}
            width={330}
            height={330}
            className={styles.chart}
            data={performances}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis tick={{ fill: "white" }} dataKey={"kind"} />
            <Radar dataKey={"value"} fill="#e60000" opacity={"0.7"} />
        </RadarChart>
    )
}

PerformanceChart.propTypes = {
    performances: PropTypes.arrayOf(PropTypes.instanceOf(Performance)),
}

export default PerformanceChart
