import Link from "next/link"
import styles from "./Celebriti.module.css"

function Celebriti({ name, img, _id }) {
  return (
    <Link href={`/showActor/${_id}`}>
      <div className={styles.CelebContainer}>
        <img src={img} alt="actor" className={styles.actor_img} />
        <span className={styles.actor_name}>{name}</span>
      </div>
    </Link>
  )
}

export default Celebriti
