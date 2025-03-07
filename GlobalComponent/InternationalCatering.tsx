import React from 'react';
import Head from 'next/head';
import { Globe2 } from 'lucide-react';

interface Event {
  client: string;
  location: string;
  type: string;
}

const InternationalCatering: React.FC = () => {
  const events: Event[] = [
    {
      client: "JSW PAINTS",
      location: "Hyatt Regency, Sydney, Australia",
      type: "Corporate Catering"
    },
    {
      client: "ASIAN PAINTS",
      location: "Bali, Indonesia",
      type: "Corporate Catering"
    },
    {
      client: "JSW PAINTS",
      location: "Budapest, Hungary",
      type: "Corporate Catering"
    }
  ];

  return (
    <>
      <Head>
        <title>International Catering Services | Global Corporate Catering</title>
        <meta name="description" content="Experience world-class international catering services for corporate events across global locations. Delivering exceptional dining experiences worldwide." />
        <meta name="keywords" content="international catering, global corporate events, corporate catering services, international food service" />
        <link rel="canonical" href="https://yourwebsite.com/international-catering" />
        <meta property="og:title" content="International Catering Excellence" />
        <meta property="og:description" content="Global catering services for prestigious corporate events across multiple countries." />
        <meta property="og:type" content="service" />
      </Head>

      <div className="w-full max-w-6xl mt-14 mx-auto p-8 bg-gradient-to-b from-[#fffbeb] to-white">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe2 className="text-[#d97706]" size={32} />
            <h1 className="text-3xl font-bold text-[#92400e]">International Catering Excellence</h1>
          </div>
          <div className="w-24 h-1 bg-[#d97706] mx-auto mb-6"></div>
        </div>

        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our global reach and unwavering dedication to excellence ensure a seamless and memorable
            dining experience for every occasion, no matter the location.
          </p>
          <p className="text-gray-700 text-lg mt-4 font-medium">
            The Savoury Soiree is proud to cater for prestigious international events, including:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-[#92400e] mb-2">{event.client}</h2>
              <div className="h-px bg-[#fde68a] mb-4"></div>
              <p className="text-gray-600 mb-2">{event.type}</p>
              <p className="text-gray-800 font-medium">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InternationalCatering;

export const metadata = {
  title: 'International Catering Services | Global Corporate Catering',
  description: 'Experience world-class international catering services for corporate events across global locations. Delivering exceptional dining experiences worldwide.',
  keywords: ['international catering', 'global corporate events', 'corporate catering services', 'international food service'],
  openGraph: {
    title: 'International Catering Excellence',
    description: 'Global catering services for prestigious corporate events across multiple countries.',
    type: 'service',
    url: 'https://yourwebsite.com/international-catering',
    images: [
      {
        url: '/images/international-catering.jpg', // Replace with an actual image path
        width: 800,
        height: 600,
        alt: 'International Catering Services'
      }
    ]
  }
};