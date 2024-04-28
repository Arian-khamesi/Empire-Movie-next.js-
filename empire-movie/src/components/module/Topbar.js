import styles from "./Topbar.module.css"
import Link from "next/link"


function Topbar({ gradiant }) {
  return (
    <div className={gradiant ? `${styles.topbar_container} col-12` : `${styles.topbar_container_normal} col-12`}>
      <div className={styles.topbar}>
        <div className={styles.topbar_left}>
          <div className={styles.logo}>
            <Link href={`/`}><img src="./image/empire.png" alt="logo" className={styles.logo_img} /></Link>
          </div>
          <div className={styles.topbar_menu}>
            <Link href={"/show-all/movies/1"} className={styles.topbar_links}>Movies</Link>
            <Link href={"/show-all/series/1"} className={styles.topbar_links}>Series</Link>
            <Link href={"/show-all/actors/1"} className={styles.topbar_links}>Actors</Link>
            <Link href={""} className={styles.topbar_links}>About Us</Link>
          </div>
        </div>
        <div className={styles.topbar_right}>
          <div className={styles.topbar_btns}>

            <>
              <Link href={"/login"} className={styles.topbar_button}>Sign In</Link>
              <Link href={"/signup"} className={styles.topbar_button}>Sign Up</Link>
            </>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
