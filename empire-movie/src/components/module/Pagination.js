"use client"

import React, { useEffect, useState } from 'react'
import styles from "./Pagination.module.css"
import Link from 'next/link'
import { useParams } from 'next/navigation'

function Pagination({ item, itemCount,setShownCourses}) {

    // const { page } = useParams()
    const [page, setPage] = useState(1)

    const [pageCount, setPageCount] = useState(null)

    useEffect(() => {
        let lastIndex = itemCount * page
        let startIndex = lastIndex - itemCount
        let paginatedItems = item.slice(startIndex, lastIndex)
        setShownCourses(paginatedItems)
        let pageNumber = Math.ceil(item.length / itemCount)
        setPageCount(pageNumber)

    }, [page, item])

    const [startIndex, setStartIndex] = useState()

    return (
        <div className={styles.courses_pagination}>
            <ul className={styles.courses__pagination_list}>
                {/* <li className="courses__pagination_item_one">
            <a href="#" className="courses__pagination_one">
              <i className="fas fa_long_arrow_alt_right courses__pagination_icon"></i>
            </a>
          </li> */}
                {
                    Array(pageCount).fill("paginate").map((pageNum, index) => (
                        <li className={styles.courses__pagination_item}>
                            <button className={(Number(page) === index + 1) ? `${styles.courses__pagination_link} ${styles.courses__pagination_link__active}` : styles.courses__pagination_link} onClick={() => setPage(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))
                }

                {/* <li className="courses__pagination_item">
            <a href="#" className="courses__pagination_link">
              <i className="fas fa_long_arrow_alt_left courses__pagination_icon"></i>
            </a>
          </li> */}
            </ul>
        </div>
    )
}
export default Pagination
