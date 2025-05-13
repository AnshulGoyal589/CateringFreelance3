import React from 'react';
import Video from './resources/Video';
import WhatWeDo from './resources/WhatWeDo';
import Features from './resources/Feature';
import { Metadata } from "next";
import metadataobj from "@/app/Metadata.json";
export const metadata: Metadata = metadataobj.about;
import defaultViewport from "@/GlobalComponent/viewportConfig";
export const viewport = defaultViewport;

const AboutPage = () => {

  return (
    <div 
      className='bg-[#ecece2]'
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      <section 
        aria-labelledby="what-we-do-heading"
        className="lg:min-h-fit bg-[#ecece2]"
      >
        <h1 
          id="what-we-do-heading" 
          className="sr-only"
        >
          What We Do
        </h1>
        <WhatWeDo />
      </section>

      <section 
        className='lg:min-h-fit bg-[#ecece2]'
        aria-labelledby="about-video-section"
      >
        <h2 
          id="about-video-section" 
          className="sr-only"
        >
          Our Story Video
        </h2>
        <Video />
      </section>

      <section 
        className='min-w-full bg-[#ecece2]'
        aria-labelledby="our-features-section"
      >
        <h2 
          id="our-features-section" 
          className="sr-only"
        >
          Our Key Features
        </h2>
        <Features />
      </section>
    </div>
  );
};

export default AboutPage;