import styles from "./HomePage.module.css"

export default function HomePage() {
  return (
    <main>
        <div className={styles.main_body_container}>
            <div className={styles.top_main_body}></div>
            <div className={`container ${styles.main_sliders}`}>
                <SliderTitle
                    title={"Movies"}
                    btn={true}
                    href={"movies"}
                />
                <div className={styles.slider_form}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}

                        className={styles.mySwiper}
                    >
                        {movieSlider.map(movie => (
                            <SwiperSlide>
                                <MovieBox poster={"horiz"} {...movie} series={false}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <SliderTitle
                    title={"Series"}
                    btn={true}
                    margin={true}
                    href={"series"}
                />
                <div className={styles.slider_form_vert}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}

                        className={styles.mySwiper}
                    >
                        {series.slice(0, 8).map(item => (
                            <SwiperSlide>
                                
                                    <MovieBox poster={"vert"} {...item} series={true} />
                              
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <SliderTitle
                    title={"Actors"}
                    btn={true}
                    margin={true}
                    href={"actors"}
                />
                <div className={styles.slider_form_vert}>
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={30}
                        loop={true}

                        className={styles.mySwiper}
                    >
                        {
                            actors.map(actor => (
                                <SwiperSlide>
                                    <Link className={styles.router_link} to={`/cast/${actor.id}`}>
                                        <Celebriti {...actor} />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className={styles.top_footer}></div>
        </div>
    </main>
  )
}
