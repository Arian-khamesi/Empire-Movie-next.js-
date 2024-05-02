import Link from 'next/link'
import styles from "./MovieBox.module.css"

function MovieBox({ poster, name, score, img, _id, series }) {
    return (
        <Link className={styles.router_link} href={series ? `/showSeries/${_id}` : `/showAll/${_id}`}>
            <div className={poster === "horiz" ? styles.horiz_movie_box : styles.vert_movie_box}>
                <div className={poster === "horiz" ? styles.horiz_cover_movie_box : styles.vert_cover_movie_box}>
                    <img src={`${img}`} alt="" className={poster === "horiz" ? styles.horiz_img_movie_box : styles.vert_img_movie_box} />
                    <div className={poster === "horiz" ? styles.horiz_movie_score : styles.vert_movie_score}>{score}</div>
                </div>
                <span className={poster === "horiz" ? styles.horiz_title_movie_box : styles.vert_title_movie_box}>{name}</span>
            </div>
        </Link>
    )
}

export default MovieBox
