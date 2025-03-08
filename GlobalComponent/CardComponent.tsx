"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import type { SwiperRef } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Type Definitions
interface SlideData {
  image: string;
  heading: string;
  subheading: string;
  alt: string;
  category: string;
}

interface CardComponentProps {
  slidesData: SlideData[];
}

const CardComponent: React.FC<CardComponentProps> = ({ slidesData }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const router = useRouter();

  const navigateAndScroll = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Premium Catering Service for Unforgettable Events
          </h1>
          <h2 className="text-gray-600 max-w-2xl mx-auto">
            Luxury catering solution for corporate event and wedding
          </h2>
        </header>

        <Swiper
          ref={swiperRef}
          spaceBetween={24}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full pb-12"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <article className="h-[500px] group relative bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative h-[45%] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    alt={slide.alt}
                    src={slide.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 h-[55%] flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-sm text-[#f1a986] mb-2 block">{slide.category}</span>
                    <h2 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#f1a986] transition-colors duration-300 mb-4">
                      {slide.heading}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{slide.subheading}</p>
                  </div>
                  <button
                    onClick={() => navigateAndScroll("/about-us")}
                    className="mt-6 w-full px-6 py-3 bg-transparent border-2 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md transition-all duration-300 font-medium"
                    aria-label={`Learn more about ${slide.heading}`}
                  >
                    Discover More
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="group bg-white border-2 border-[#f1a986] text-[#f1a986] p-4 rounded-full hover:bg-[#f1a986] hover:text-white transition-all duration-300"
          >
            <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="group bg-white border-2 border-[#f1a986] text-[#f1a986] p-4 rounded-full hover:bg-[#f1a986] hover:text-white transition-all duration-300"
          >
            <MdOutlineKeyboardArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
