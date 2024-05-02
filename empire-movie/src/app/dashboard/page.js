import DashboardPanel from "@/components/template/DashboardPanel"
import styles from "./page.module.css"
import DashboardPlayList from "@/components/template/DashboardPlayList"

function page() {
    return (
        <div className={styles.user_panel_container}>
            <div className={styles.gray_userpanel}></div>
            <DashboardPanel/>
            <DashboardPlayList/>
        </div>
    )
}

export default page
