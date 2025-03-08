// 'use client'

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Head from 'next/head';

interface DataItem {
  no: number;
  heading: string;
  text: string;
}

const WhatWeDo: React.FC = () => {
  const data: DataItem[] = [
    {
      no: 1,
      heading: "Our Philosophy",
      text: "At The Savoury Soiree, we believe in infusing every occasion with enchantment through exceptional flavors and unparalleled attention to detail. As a leading name in catering for events, we are committed to delivering culinary excellence and making your event truly special."
    },
    {
      no: 2,
      heading: "Our Objectives",
      text: "We don't just provide catering for events—we create cherished memories with top catering service that delights every guest. Whether it's a wedding, corporate event, birthday, or cultural celebration, our team ensures a flawless dining experience with impeccable service and delicious cuisine."
    },
    {
      no: 3,
      heading: "Our People",
      text: "Our people are the heart of The Savoury Soiree. Our chefs and hospitality professionals work together to bring you the best catering services in the industry. From crafting signature menus to delivering impeccable service, we ensure that every event is a masterpiece of flavor and elegance."
    },
    {
      no: 4,
      heading: "Our Goal: Superior Customer Experience",
      text: "At The Savoury Soiree, our goal is simple—to provide a superior customer experience. As one of the best catering services in India, we are committed to understanding customer needs, ensuring satisfaction, and continuously improving our offerings to exceed expectations."
    },
    {
      no: 5,
      heading: "Trusted by Esteemed Clients",
      text: "Our expertise in catering for events has been recognized and trusted by esteemed clients, including the Government of India. We take pride in organizing high-profile events and official gatherings, ensuring the highest standards of quality, professionalism, and excellence."
    }
  ];

  const [activeItems, setActiveItems] = useState<number[]>([]);

  const toggleItem = (index: number): void => {
    setActiveItems(prevState =>
      prevState.includes(index)
        ? prevState.filter(item => item !== index)
        : [...prevState, index]
    );
  };

  return (
    <>
      <Head>
        <title>The Savoury Soiree - Exceptional Catering Services</title>
        <meta 
          name="description" 
          content="The Savoury Soiree offers bespoke catering services for weddings, corporate events, and intimate soirées. Experience culinary artistry and sophisticated elegance." 
        />
        <meta 
          name="keywords" 
          content="catering, event catering, wedding catering, corporate catering, gourmet dining, bespoke menus" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/what-we-do" />
      </Head>

      <div 
        className="flex flex-col lg:flex-row bg-[#ecece2] lg:min-h-[32rem] gap-4 lg:gap-8 p-4 lg:p-16 lg:px-56"
        itemScope 
        itemType="http://schema.org/Service"
      >
        {/* Left side */}
        <div className="flex-1 space-y-4 lg:space-y-6">
          <h1 
            className="text-2xl lg:text-3xl font-semibold text-gray-800 transition-colors duration-300"
            itemProp="name"
          >
            What we do
          </h1>
          <div className="space-y-4">
            <p className="text-base lg:text-xl text-gray-700 space-y-4">
              Welcome to <span className="italic inline-block text-[#8B4513] text-lg lg:text-2xl">The Savoury Soiree</span>, where culinary artistry meets sophisticated elegance! As one of the best catering services in India, we are dedicated to transforming your celebrations into unforgettable experiences with our premium catering services.
            </p>
            
            <p className="text-base lg:text-xl text-gray-700">
              Whether it&apos;s an intimate soirée, a grand wedding, or a refined corporate affair, we bring flavor, style, and flair to every event. Our wedding caterers and expert chefs cooks bespoke menus designed to your tastes and preferences, ensuring a seamless, memorable experience.
            </p>
            
            <p className="text-base lg:text-xl text-gray-700">
              From exquisite appetisers to delectable desserts, every dish is meticulously prepared using the freshest, finest ingredients. Whether you need event catering for a corporate event, engagement, birthday, or social celebration, we offer customised menus to suit every theme and preference.
            </p>
            
            <p className="text-base lg:text-xl text-gray-700 font-semibold">
              Serving Across India
            </p>
            
            <p className="text-base lg:text-xl text-gray-700">
              We proudly offer premium catering services in:
            </p>
            
            <ul 
              className="list-none text-base lg:text-lg text-gray-700 pl-8 lg:pl-16 space-y-2"
              itemProp="description"
            >
              <li>✅ Delhi, Gurugram, NCR</li>
              <li>✅ Mumbai, Pune, and the Northern region</li>
              <li>✅ Gujarat, Kolkata, and Uttar Pradesh</li>
              <li>✅ Bangalore and many more.</li>
            </ul>
            
            <p className="text-base lg:text-xl text-gray-700">
              Let us handle the culinary details, so you can savor every moment. Your perfect event starts with a simple call—contact us now!
            </p>
            
            <p className="text-base lg:text-xl text-gray-700 font-semibold">
              Why Choose Us?
            </p>

            <ul 
              className="list-disc text-base lg:text-lg text-gray-700 pl-8 lg:pl-16 space-y-2"
              itemProp="description"
            >
              <li>Best catering services across India for all event types</li>
              <li>Personalised menus designed to match your event theme</li>
              <li>Attention to detail in presentation and service</li>
              <li>Professional wedding caterers and event specialists</li>
              <li>Seamless event execution with a trained hospitality team</li>
            </ul>
            
            <p className="text-base lg:text-xl text-gray-700">
              Let&apos;s make your next event extraordinary! Book our premium catering services today and experience the finest event catering across India.
            </p>
            
            <p className="text-base lg:text-xl text-gray-700">
              Experience unparalleled catering services across India—contact us today!
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 space-y-4 mt-6 lg:mt-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              itemScope
              itemType="http://schema.org/Thing"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
                role="button"
                aria-expanded={activeItems.includes(index)}
                aria-controls={`section-${index}`}
              >
                <div 
                  className="font-semibold text-gray-800 text-lg lg:text-xl hover:text-[#F1A986] transition-colors duration-300"
                  itemProp="name"
                >
                  {item.heading}
                </div>
                <div className="text-[#F1A986] transition-transform duration-300 transform hover:scale-110">
                  {activeItems.includes(index) ? 
                    <Minus className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" /> : 
                    <Plus className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                  }
                </div>
              </div>
              <div
                id={`section-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeItems.includes(index) ? 'max-h-40 py-2' : 'max-h-0 py-0'
                }`}
                aria-hidden={!activeItems.includes(index)}
              >
                {activeItems.includes(index) && (
                  <p 
                    className="text-gray-600 text-sm lg:text-base mt-2"
                    itemProp="description"
                  >
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;