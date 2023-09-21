"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../globals.css';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function SwiperComp() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
            delay: 2100,
            disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{
            clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='/church_img/cimg.jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (2).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (3).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (4).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (5).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (6).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (7).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (8).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (9).jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/church_img/cimg (10).jpeg'/>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
