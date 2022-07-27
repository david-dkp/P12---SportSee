import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const chartMargin = { top: 30, right: 30, bottom: 30, left: 30 }

const ScoreChart = ({ scorePercent }) => {
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width={300} height={300}>
                <RadialBarChart
                    data={[{ name: "Score", value: scorePercent }]}
                    innerRadius="100%"
                    barSize={10}
                    startAngle={90}
                    endAngle={450}
                    margin={chartMargin}
                >
                    <PolarAngleAxis
                        tick={false}
                        type="number"
                        domain={[0, 1]}
                    />
                    <RadialBar
                        fill="#e60000"
                        cornerRadius={999}
                        dataKey={"value"}
                    />
                </RadialBarChart>
            </ResponsiveContainer>

            <div className={styles["label-container"]}>
                <span className={styles["label-percent-text"]}>
                    {scorePercent * 100}%
                </span>
                <span className={styles["label-percent-sub-text"]}>
                    de votre objectif
                </span>
            </div>
        </div>
    )
}

ScoreChart.propTypes = {
    scorePercent: PropTypes.number,
}

export default ScoreChart
