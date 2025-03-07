import React from "react";
import ClientWrapper from "@/app/utils/ClientWrapper"; // Import the client component

interface SlideData {
  image: string;
  heading: string;
  subheading: string;
  alt: string;
}

// Static slides for SEO-friendly rendering
const slidesData: SlideData[] = [
  {
    image: "https://img.freepik.com/premium-psd/abundant-buffet-table-with-various-dishes-including-pasta-seafood-salad-roasted-vegetables-bread_296091-32866.jpg",
    heading: "Premier Catering Services in Delhi NCR",
    subheading: "Luxury Catering Solutions for Corporate Events & Weddings",
    alt: "Luxury catering spread in Delhi featuring international cuisine",
  },
  {
    image: "https://img.freepik.com/premium-photo/contemporary-hotel-dining-area-featuring-sleek-buffet-setup-stylish-seating-arrangement_355018-11820.jpg?w=1060",
    heading: "Best Wedding Caterers in Delhi",
    subheading: "Crafting Memorable Celebrations with Exquisite Cuisines",
    alt: "Elegant wedding catering setup in Delhi",
  },
  {
    image: "https://img.freepik.com/premium-photo/festive-iftar-gathering-soft-lantern-lights-with-delicious-appetizers-drinks_1160244-4718.jpg?w=1060",
    heading: "Top Corporate Event Catering in Delhi",
    subheading: "Professional Catering Services for Business Functions",
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
