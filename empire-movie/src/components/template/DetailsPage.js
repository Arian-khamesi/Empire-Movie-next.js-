"use client"

import { useParams } from "next/navigation";
import styles from "./DetailsPage.module.css"

function DetailsPage(data) {
    const params = useParams()
    // const { movieId } = useParams()
    // const {movieType } = useParams()
    // console.log(movieId);
    // console.log(movieType);

    // const mainMovie = movies.find(movie => movie.id == movieId)
    // const mainSerie = series.find(serie => serie.id == movieId)
    console.log(data);
    return (
        <div className={styles.movie_info_container} style={{ backgroundImage: `url(${data.data.img})` }}>
            <div className={styles.gray_movie_info}></div>
            {/* <div className={styles.topbar_z}><Topbar gradiant={true} /></div> */}
            <div className={styles.movie_info}>
                <div className={styles.movie_info_left}>
                    <img src={`${data.data.img}`} alt="" className={styles.movie_info_poster} />
                    {/* <div className="movie_info_score"></div> */}
                </div>
                <div className={styles.movie_info_right}>
                    <div className={styles.movie_information}>
                        <span className={styles.time_movie}>{data.data.time ? "Time" : "Season"} : {data.data.time ? data.data.time : data.data.seasen}</span>
                        <span className={styles.date_movie}>Year : {data ? data.data.year : data.data.year}</span>
                        <span className={styles.score_imdb_movie}>IMDB : {data ? data.data.score : data.data.score}</span>
                    </div>
                    <div className={styles.movie_description}>
                        <h1 className={styles.movie_info_title}>{data ? data.data.name : data.data.name}</h1>
                        <p className={styles.movie_info_desc}><span className={styles.overview}>Overview :</span>{data ? data.data.desc : data.data.desc}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailsPage
