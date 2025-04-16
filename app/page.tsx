import React from 'react'
import Slider from '@/GlobalComponent/Slider'
import CardComponent from "@/GlobalComponent/ClientComponent/CardSlide";
import FilmList from "@/GlobalComponent/FilmList";
import Service from "@/GlobalComponent/Service";
import CateringEvents from '@/GlobalComponent/CateringEvent';
import InternationalCatering from '@/GlobalComponent/InternationalCatering';

import { Metadata } from "next";
import metadataobj from "@/app/Metadata.json";
export const metadata: Metadata = metadataobj.home;
import defaultViewport from "@/GlobalComponent/viewportConfig";
export const viewport = defaultViewport;

function page() {
  return (
    <>
      {/* <Header /> */}

      <div className="min-h-screen w-full bg-[#ecece2]">
        <Slider />

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          style={{ position: "absolute", top: "69%", zIndex: "5", width: "100%" }}
        >
          <a
            href="/about"
            className="px-8 py-3 text-lg font-medium bg-[#f1a986] text-white border-2 border-[#f1a986] hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto text-center"
            aria-label="Learn more about our catering services"
          >
            Discover More
          </a>
          <a
            href="/contact"
            className="px-8 py-3 text-lg font-medium bg-white text-[#f1a986] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto text-center"
            aria-label="Contact us to plan your event"
          >
            Plan Your Event
          </a>
        </div>

        {/* <div className="swiper-button-next !text-white hover:text-[#f1a986] transition-colors duration-300"></div>
        <div className="swiper-button-prev !text-white hover:text-[#f1a986] transition-colors duration-300"></div> */}


        <main>
          <section
            className="relative z-20 px-4 sm:px-6 lg:px-8 bg-transparent"
            aria-label="Featured Services"
          >
            <CardComponent />
          </section>

          <section
            className="bg-[#ecece2]"
            aria-label="About Us"
          >
            <FilmList />
          </section>

          <section
            className="bg-[#ecece2]"
            aria-label="Our Services"
          >
            <Service />
          </section>

          <section
            className="bg-[#ecece2]"
            aria-label="Catering Events"
          >
            <CateringEvents />
          </section>

          <section aria-label="International Catering">
            <InternationalCatering />
          </section>
        </main>

      </div>
      {/* <Footer /> */}
    </>
  )
}

export default page