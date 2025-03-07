"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

interface SlideData {
  image: string;
  heading: string;
  subheading: string;
  alt: string;
}

export default function ClientSwiper({ slidesData }: { slidesData: SlideData[] }) {
  return (
    <Swiper
      className="w-full h-screen relative"
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-screen flex flex-col items-center justify-center text-white text-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
            <div className="relative z-10 px-6 max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{slide.heading}</h1>
              <p className="text-xl sm:text-2xl">{slide.subheading}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
