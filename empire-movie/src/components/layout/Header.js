
import styles from "./Header.module.css"
import Topbar from "../module/Topbar"
import Landing from "../module/Landing"

function Header() {
  return (
    <div className={styles.container_img}>
    <Topbar gradiant={true}/>
    <div className={styles.full}></div>
    <div className={styles.shadow}></div>
    {/* <Landing/> */}
    </div>
  )
}

export default Header
