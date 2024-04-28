import styles from "./Landing.module.css"

function Landing() {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landimg_text}>
        <h1 className={styles.landimg_text_h1}>The realm of movie lovers</h1>
        <span className={styles.landimg_text_span}> Find your taste in Empire Movie  </span>
        <span className={styles.landimg_text_span}>Create your wish list  </span>
        <span className={styles.landimg_text_span}> and interact with each other  </span>
      </div>
    </div>
  )
}

export default Landing
