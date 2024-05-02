import Celebriti from "../module/Celebriti"
import MovieBox from "../module/MovieBox"
import styles from "./ShowAllList.module.css"

function ShowAllList({ data }) {
    return (
        <div className={styles.all_container}>
            <div className={styles.gray}></div>

            {data[1].time &&
                <div className={styles.boxContainer}>
                    <div className={ styles.all_m}>
                        {
                            data.map(movie =>
                                <MovieBox {...movie} poster={"horiz"}
                                    series={false} />
                            )
                        }
                    </div>
                    {/* <Pagination
                        item={data}
                        itemCount={6}
                        pathName={`/show-all/${type}`}
                        setShownCourses={setShownMovies}
                        className="mb-5" /> */}
                </div>
            }
            {data[1].seasen &&
                <>
                    <div className={styles.boxContainer}>
                        <div className={ styles.all}>
                            {
                                data.map(serie =>
                                    <MovieBox {...serie} poster={"vert"}
                                        series={true} />
                                )
                            }
                        </div>
                        {/* <Pagination
                            item={series}
                            itemCount={6}
                            pathName={`/show-all/${type}`}
                            setShownCourses={setShownSeries} /> */}
                    </div>
                </>
            }
            {data[1].age &&
                <div className="boxContainer">
                    <div className={styles.all}>
                        {
                            data.map(actor =>
                                <Celebriti {...actor} />
                            )
                        }
                    </div>
                    {/* <Pagination
                        item={actors}
                        itemCount={6}
                        pathName={`/show-all/${type}`}
                        setShownCourses={setShownActors} /> */}
                </div>
            }
            <div className={styles.top_footer}></div>
        </div>
    )
}

export default ShowAllList
