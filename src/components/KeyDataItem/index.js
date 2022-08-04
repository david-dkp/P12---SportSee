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
    /**
     * The icon that represents the data.
     */
    icon: PropTypes.func,
    /**
     * The main color of the icon, also used as the background color.
     */
    color: PropTypes.string.isRequired,
    /**
     * The name of the data.
     */
    title: PropTypes.string.isRequired,
    /**
     * The text displayed of the data.
     */
    value: PropTypes.string.isRequired,
}

export default KeyDataItem
