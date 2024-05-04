import DashboardPanel from "@/components/template/DashboardPanel"
import styles from "./page.module.css"
import DashboardPlayList from "@/components/template/DashboardPlayList"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

async function page() {

const session=await getServerSession(authOptions)
if(!session)redirect("/signin")

    return (
        <div className={styles.user_panel_container}>
            <div className={styles.gray_userpanel}></div>
            <DashboardPanel/>
            <DashboardPlayList/>
        </div>
    )
}

export default page
