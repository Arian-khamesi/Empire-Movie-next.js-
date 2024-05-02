import Link from 'next/link'
import styles from "./SliderTitle.module.css"

function SliderTitle({ title, btn, margin, href }) {
    return (
      <div className={margin ? `${styles.slider_title_container} ${styles.addMargin}` : styles.slider_title_container}>
        <h2 className={styles.slider_title}>{title}</h2>
        {btn ? <Link href={`/${href}`}><button className={styles.slider_all}>See All</button></Link> : null}
      </div>
    )
  }
  

export default SliderTitle
