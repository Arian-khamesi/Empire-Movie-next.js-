"use client"

import { useState } from "react";
import Celebriti from "../module/Celebriti"
import MovieBox from "../module/MovieBox"
import Pagination from "../module/Pagination";
import styles from "./ShowAllList.module.css"

function ShowAllList({ data }) {

    const [shownItems, setShownItems] = useState([])
    console.log(shownItems);

    return (
        <div className={styles.all_container}>
            <div className={styles.gray}></div>

            {data[1].time && <>
                <h2 className={styles.title}>SHOW ALL MOVIES</h2>
                <div className={styles.boxContainer}>
                    <div className={styles.all_m}>
                        {
                            shownItems.map(movie =>
                                <MovieBox {...movie} poster={"horiz"}
                                    series={false} />
                            )
                        }
                    </div>
                    <Pagination
                        item={data}
                        itemCount={6}
                        setShownCourses={setShownItems}
                        className="mb-5" />
                </div>
            </>
            }
            {data[1].seasen &&
                <>
                    <h2 className={styles.title}>SHOW ALL SERIES</h2>
                    <div className={styles.boxContainer}>
                        <div className={styles.all}>
                            {
                                shownItems.map(serie =>
                                    <MovieBox {...serie} poster={"vert"}
                                        series={true} />
                                )
                            }
                        </div>
                        <Pagination
                            item={data}
                            itemCount={8}
                            setShownCourses={setShownItems} />
                    </div>
                </>
            }
            {data[1].age &&
                <>
                    <h2 className={styles.title}>SHOW ALL ACTORS</h2>
                    <div className="boxContainer">
                        <div className={styles.all}>
                            {
                                shownItems.map(actor =>
                                    <Celebriti {...actor} />
                                )
                            }
                        </div>
                        <Pagination
                        item={data}
                        itemCount={4}
                        setShownCourses={setShownItems} />
                    </div>
                </>
            }
            <div className={styles.top_footer}></div>
        </div>
    )
}

export default ShowAllList
