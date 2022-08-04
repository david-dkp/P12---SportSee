/* eslint-disable jsx-a11y/anchor-is-valid */
import AppIcon from "components/Icons/AppIcon"
import BikeIcon from "components/Icons/BikeIcon"
import FitnessIcon from "components/Icons/FitnessIcon"
import MedidateIcon from "components/Icons/MedidateIcon"
import SwimIcon from "components/Icons/SwimIcon"
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
            <footer className={styles["page-layout-left-bar"]}>
                <div className={styles["page-layout-left-bar-items"]}>
                    <div className={styles["page-layout-left-bar-item"]}>
                        <MedidateIcon />
                    </div>
                    <div className={styles["page-layout-left-bar-item"]}>
                        <SwimIcon />
                    </div>
                    <div className={styles["page-layout-left-bar-item"]}>
                        <BikeIcon />
                    </div>
                    <div className={styles["page-layout-left-bar-item"]}>
                        <FitnessIcon />
                    </div>
                </div>
                <span className={styles["page-layout-left-bar-copyright"]}>
                    Copiryght, SportSee 2022
                </span>
            </footer>
        </div>
    )
}

PageLayout.propTypes = {
    /**
     * The children to render inside the page layout.
     */
    children: PropTypes.node.isRequired,
}

export default PageLayout
