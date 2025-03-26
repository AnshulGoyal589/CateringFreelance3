import React from 'react';
import type { Metadata } from 'next';
import EventCard from '@/GlobalComponent/ClientComponent/CateringEventCard';
// import EventCard from './EventCard';
import catering_event_image_1 from "../public/homePage/premier-1.webp"
import catering_event_image_2 from "../public/homePage/premier-2.webp"
import catering_event_image_3 from "../public/homePage/premier-3.webp"
import catering_event_image_4 from "../public/homePage/premier-4.webp"
import catering_event_image_5 from "../public/homePage/premier-5.webp"


interface EventData {
  image: string;
  text: string;
  alt: string;
  description: string;
}

const data: EventData[] = [
    { 
      image: catering_event_image_1.src, 
      text: "Corporate Event Catering in Delhi NCR",
      alt: "Professional corporate catering setup in Delhi NCR",
      description: "Premium corporate event catering services in Delhi with customized menus"
    },
    { 
      image: catering_event_image_2.src, 
      text: "Wedding Catering Services Delhi",
      alt: "Elegant wedding catering display in Delhi",
      description: "Luxurious wedding catering arrangements with traditional and modern cuisines"
    },
    { 
      image: catering_event_image_3.src, 
      text: "Private Party Catering Delhi",
      alt: "Intimate private dinner party setup in Delhi",
      description: "Personalized catering solutions for private events in Delhi"
    },
    { 
      image: catering_event_image_4.src, 
      text: "Outdoor Catering Services Delhi",
      alt: "Garden party catering arrangement in Delhi",
      description: "Professional outdoor catering services for Delhi events"
    },
    { 
      image:catering_event_image_5.src, 
      text: "Birthday Party Catering Delhi",
      alt: "Birthday celebration catering setup in Delhi",
      description: "Creative birthday party catering solutions in Delhi NCR"
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "name": "Delhi Premium Catering Services",
    "description": "Professional catering services in Delhi NCR for corporate events, weddings, private parties, and special occasions",
    "areaServed": {
      "@type": "City",
      "name": "Delhi"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "servesCuisine": [
      "Indian",
      "Continental",
      "Chinese",
      "Mediterranean"
    ]
  };

export const metadata: Metadata = {
  // ... (same metadata export as original)
};

const CateringEvents = () => {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData) 
        }} 
      />

      <div className="py-10 bg-[#ecece2] overflow-x-hidden">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Premier Catering Services in Delhi NCR
          </h1>
          <p className="text-2xl text-gray-600 font-light leading-relaxed">
            <span className="inline">Delhi&apos;s trusted catering partner for corporate events, weddings, and celebrations</span>
            <br />
            <span>Serving the finest cuisines with professional excellence</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
          {data.map((item, index) => (
            <EventCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CateringEvents;