import styles from "./styles.module.css"
import PropTypes from "prop-types"

const KeyDataItem = ({ icon, color, title, value }) => (
    <div className={styles.container}>
        <div className={styles["icon-container"]}>
            <div
                style={{ backgroundColor: color }}
                className={styles["icon-container-background"]}
            />

            {icon({ fill: color })}
        </div>
        <div className={styles["data-container"]}>
            <div className={styles["data-value"]}>{value}</div>
            <div className={styles["data-title"]}>{title}</div>
        </div>
    </div>
)

KeyDataItem.propTypes = {
    icon: PropTypes.element,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default KeyDataItem
