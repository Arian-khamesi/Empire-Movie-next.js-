
import styles from "./ActorProfile.module.css"
import SliderTitle from "./SliderTitle"
import SwiperModule from "./SwiperModule"


async function ActorProfile({data}) {

   
   

    return (
        <div className={styles.cast_container}>
            <div className={styles.gray}></div>
            {/* <div><Topbar /></div> */}
            <div className={styles.cast}>
                <div className={styles.cast_left}>
                    <img src={data.img} alt="" className={styles.cast_poster} />
                    <div className={styles.cast_score}></div>
                </div>
                <div className={styles.cast_right}>
                    <div className={styles.castrmation}>
                        <span className={styles.birthday_cast}>{data.birth}</span>
                        <span className={styles.age_cast}>Age : {data.age}</span>
                        <span className={styles.role_cast}>Actor</span>
                    </div>
                    <div className={styles.movie_description}>
                        <h1 className={styles.cast_title}>{data.name}</h1>
                        <p className={styles.cast_desc}><span className={styles.biography}>Biography :</span>{data.desc}</p>
                    </div>
                </div>
            </div>
            {/* <div className={`container ${styles.zIndex}`}>
                <SliderTitle
                    title={"Movies"}
                    btn={false}
                />
            </div>
            <div className={`${styles.cast_movie} container`}>
                {
                    data.movies.length > 3 ? (
                        <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}

                            className={styles.mySwiper}
                        >
                            {
                                actorMovie.slice(0, actorMovie.length - 1).map(movie => (
                                    <SwiperSlide>
                                        <Link className={styles.router_link} to={"/movie-info/movieName"}>
                                            <MovieBox poster={"horiz"} {...movie} />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <SwiperModule list={data.movies.slice(0,data.movies.length-1)} style={"horiz"}></SwiperModule>
                     </>
                    ) : (
<></>
                        actorMovie.map(movie => (
                            <SwiperSlide>
                                <Link className={styles.router_link} to={"/movie-info/movieName"}>
                                    <MovieBox poster={"horiz"} {...movie} />
                                </Link>
                            </SwiperSlide>
                        ))

                    )

                }
            </div> */}
        </div>
    )
}

export default ActorProfile
