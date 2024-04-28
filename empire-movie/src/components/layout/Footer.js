import styles from "./Footer.module.css"
function Footer() {
  return (
    <div className={styles.footer_container}>
    <div className={`${styles.footer} container`}>
    <h2 className={styles.footer_logo}>EMPIRE MOVIE</h2>
    <span>designed by Aryaun</span>
    </div>
  </div>
  )
}

export default Footer
