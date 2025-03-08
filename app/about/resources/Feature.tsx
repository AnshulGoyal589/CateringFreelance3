"use client";

import React, { useEffect } from 'react';
import {
  FaUsers, 
  FaWallet, 
  FaAward, 
  FaLaptop, 
  FaClock,
  FaTachometerAlt 
} from 'react-icons/fa';
import { Metadata } from 'next';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define a type for the service item
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const servicesInfo: ServiceItem[] = [
    {
      icon: <FaTachometerAlt style={{ color: '#f1a986' }} />,
      title: 'Fast Service',
      description: 'Enjoy quick and seamless service to make your dining experience exceptional.',
    },
    {
      icon: <FaUsers style={{ color: '#f1a986' }} />,
      title: 'Expert Team',
      description: 'A team of highly skilled professionals dedicated to ensuring perfection.',
    },
    {
      icon: <FaWallet style={{ color: '#f1a986' }} />,
      title: 'Affordable Prices',
      description: 'Get premium services at a price that fits your budget.',
    },
    {
      icon: <FaAward style={{ color: '#f1a986' }} />,
      title: 'Award Winning',
      description: 'Recognized for delivering unparalleled quality and outstanding experiences.',
    },
    {
      icon: <FaLaptop style={{ color: '#f1a986' }} />,
      title: 'Modern Technology',
      description: 'Leverage cutting-edge technology to enhance your events and services.',
    },
    {
      icon: <FaClock style={{ color: '#f1a986' }} />,
      title: 'Always Open',
      description: 'We are available around the clock to cater to your needs anytime.',
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="flex lg:min-h-[300px] flex-col mt-4 py-20 bg-[#ecece2]"
      aria-labelledby="features-heading"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <h2 
        id="features-heading" 
        className="sr-only"
      >
        Our Core Services and Features
      </h2>
      
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        itemProp="hasOfferCatalog"
      >
        {servicesInfo.map((service, index) => (
          <div
            key={index}
            className="flex gap-5 p-4 bg-gray-100 rounded-lg shadow-md"
            data-aos="fade-up"  
            data-aos-delay={index * 100}
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div 
              className="icon text-4xl mb-4" 
              itemProp="image"
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <div>
              <h3 
                className="text-lg font-semibold"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p 
                className="text-richblack-300"
                itemProp="description"
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Our Services | Comprehensive Restaurant Solutions',
  description: 'Discover our range of exceptional services including fast service, expert team, affordable prices, and cutting-edge technology.',
  keywords: [
    'restaurant services', 
    'dining experience', 
    'professional catering', 
    'restaurant technology', 
    'affordable dining'
  ],
  openGraph: {
    title: 'Our Services | Comprehensive Restaurant Solutions',
    description: 'Discover our range of exceptional services including fast service, expert team, affordable prices, and cutting-edge technology.',
    type: 'website'
  }
};

export default Features;