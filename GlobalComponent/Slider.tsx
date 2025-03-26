import React from "react";
import ClientWrapper from "@/app/utils/ClientWrapper"; // Import the client component
import img1 from "../public/homePage/homeSlider_img1.jpg"
import img2 from "../public/homePage/homeSlider_img2.jpg"
import img3 from "../public/homePage/homeSlider_img3.jpg"
interface SlideData {
  image: string;
  heading: string;
  subheading: string;
  alt: string;
}

// Static slides for SEO-friendly rendering
const slidesData: SlideData[] = [
  {
    image: img1.src,
    heading: "Premium Catering Service for Unforgettable Events",
    subheading: "Luxury catering solution for corporate event and wedding",
    alt: "Luxury catering spread in Delhi featuring international cuisine",
  },
  {
    image: img2.src,
    heading: "Best Wedding Caterers in India",
    subheading: "Crafting Memorable Celebrations with Exquisite Cuisines",
    alt: "Elegant wedding catering setup in Delhi",
  },
  {
    image: img3.src,
    heading: "Catering service for all events",
    subheading: "Professional Catering Services for Business Functions and Events",
    alt: "Corporate event catering arrangement in Delhi",
  },
];

export default function Slider() {
  return (
    <div>
      <style>{`
        .animate-heading {
          opacity: 1;
        }
      `}</style>

      <div className="relative">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center text-white text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 p-8">
              {/* <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">{slide.heading}</h1> */}
              {/* <p className="text-xl sm:text-2xl mb-8">{slide.subheading}</p> */}
            </div>
          </div>
        ))}
      </div>

      <ClientWrapper slidesData={slidesData} />
    </div>
  );
}
