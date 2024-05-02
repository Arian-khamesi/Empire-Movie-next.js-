"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/swiper.min.css"
import 'swiper/css'
import React from 'react'
import styles from "./Swiper.module.css"
import MovieBox from './MovieBox';
import Link from 'next/link';
import Celebriti from './Celebriti';

function SwiperModule({ list, style, celeb }) {
  return (
    <Swiper
      slidesPerView={celeb ? 5 : style === "horiz" ? 3 : 5}
      spaceBetween={30}
      loop={style === "vert" ? true : false}
      className={styles.mySwiper}
    >
      {list.map(listItem => (
        <SwiperSlide>
          {celeb ?
            <Celebriti {...listItem} />
            : <MovieBox poster={style} {...listItem} series={style === "vert" ? true : false} />}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperModule

