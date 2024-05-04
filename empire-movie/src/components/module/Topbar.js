"use client"

import { useSession } from "next-auth/react"
import styles from "./Topbar.module.css"
import Link from "next/link"
// import User from "@/models/Users"


function Topbar({ gradiant }) {

  const { data } = useSession()
  console.log(data);

  // if (data) {
  //   const user = await User.findOne({ email: data.user.email })
  // }

  return (
    <div className={gradiant ? `${styles.topbar_container} col-12` : `${styles.topbar_container_normal} col-12`}>
      <div className={styles.topbar}>
        <div className={styles.topbar_left}>
          <div className={styles.logo}>
            <Link href={`/`}><img src="./image/empire.png" alt="logo" className={styles.logo_img} /></Link>
          </div>
          <div className={styles.topbar_menu}>
            <Link href={"/showAll"} className={styles.topbar_links}>Movies</Link>
            <Link href={"/showSeries"} className={styles.topbar_links}>Series</Link>
            <Link href={"/showActor"} className={styles.topbar_links}>Actors</Link>
            <Link href={""} className={styles.topbar_links}>About Us</Link>
          </div>
        </div>
        <div className={styles.topbar_right}>
          <div className={styles.topbar_btns}>

            {data ? <Link href={"/dashboard"} className={styles.topbar_button}>{data.user.email}</Link> : <>
              <Link href={"/signin"} className={styles.topbar_button}>Sign In</Link>
              <Link href={"/signup"} className={styles.topbar_button}>Sign Up</Link>
            </>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
