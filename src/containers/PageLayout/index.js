/* eslint-disable jsx-a11y/anchor-is-valid */
import AppIcon from "components/Icons/AppIcon"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const PageLayout = ({ children }) => {
    return (
        <div className={styles["page-layout-container"]}>
            <header className={styles["page-layout-header"]}>
                <div className={styles["page-layout-header-logo"]}>
                    <AppIcon />
                    <span className={styles["page-layout-header-logo-text"]}>
                        SportSee
                    </span>
                </div>
                <ul className={styles["page-layout-header-nav"]}>
                    <li className={styles["page-layout-header-nav-item"]}>
                        <a href="#">Accueil</a>
                    </li>
                    <li className={styles["page-layout-header-nav-item"]}>
                        <a href="#">Profil</a>
                    </li>
                    <li className={styles["page-layout-header-nav-item"]}>
                        <a href="#">Réglage</a>
                    </li>
                    <li className={styles["page-layout-header-nav-item"]}>
                        <a href="#">Communauté</a>
                    </li>
                </ul>
            </header>
            <main className={styles["page-layout-main"]}>{children}</main>
        </div>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageLayout
