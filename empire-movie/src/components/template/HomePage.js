
import SliderTitle from "../module/SliderTitle"
import styles from "./HomePage.module.css"
import Link from 'next/link';
import SwiperModule from "../module/SwiperModule";
import Movie from "@/models/Movies";


export default async function HomePage() {

    const res = await fetch("http://localhost:3000/api/movie", {
        cache: "no-store",
    });
    const data = await res.json();
    let finalData = data.data;

    const movieSlider = finalData.slice(finalData.length - 10, finalData.length)

    //////////////////////////////////////////
    const res2 = await fetch("http://localhost:3000/api/serie", {
        cache: "no-store",
    });
    const data2 = await res2.json();
    let series = data2.data;

    ///////////////////////////////////////////
    const res3 = await fetch("http://localhost:3000/api/actor", {
        cache: "no-store",
    });
    const data3 = await res3.json();
    let actors = data3.data;

    return (
        <main>
            <div className={styles.main_body_container}>
                <div className={styles.top_main_body}></div>
                <div className={`container ${styles.main_sliders}`}>
                    <SliderTitle
                        title={"Movies"}
                        btn={true}
                        href={"showAll"}
                    />
                    <div className={styles.slider_form}>
                        <SwiperModule list={movieSlider} style={"horiz"} />
                    </div>
                    <SliderTitle
                        title={"Series"}
                        btn={true}
                        margin={true}
                        href={"showSeries"}
                    />
                    <div className={styles.slider_form_vert}>
                        <SwiperModule list={series.slice(0, 8)} style={"vert"}></SwiperModule>
                        {/* <Swiper
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
                    </Swiper> */}

                    </div>
                    <SliderTitle
                        title={"Actors"}
                        btn={true}
                        margin={true}
                        href={"showActor"}
                    />
                    <div className={styles.slider_form_vert}>
                        <SwiperModule list={actors} celeb={true}></SwiperModule>
                        {/* <Swiper
                        slidesPerView={8}
                        spaceBetween={30}
                        loop={true}

                        className={styles.mySwiper}
                    >
                        {
                            actors.map(actor => (
                                <SwiperSlide>
                                    <Link className={styles.router_link} href={`/cast/${actor.id}`}>
                                        <Celebriti {...actor} />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper> */}

                    </div>
                </div>
                <div className={styles.top_footer}></div>
            </div>
        </main>
    )
}
