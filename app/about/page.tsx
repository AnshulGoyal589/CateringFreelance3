"use client"


import React from 'react';
import Video from './resources/Video';
import WhatWeDo from './resources/WhatWeDo';
import Features from './resources/Feature';
// import WhatWeDo from '@/components/WhatWeDo';
// import Video from '@/components/Video';
// import Features from '@/components/Features';


const AboutPage = () => {
  // useEffect(() => {
  //   if (setPreview) {
  //     setPreview("About Us");
  //   }
  // }, [setPreview]);

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

// Metadata for SEO
// export const metadata: Metadata = {
//   title: 'About Us | Our Story, Vision, and Commitment',
//   description: 'Discover our journey, passion, and commitment to delivering exceptional culinary experiences. Learn about our team, values, and unique approach.',
//   keywords: [
//     'about our restaurant', 
//     'culinary journey', 
//     'restaurant vision', 
//     'our story', 
//     'culinary expertise'
//   ],
//   openGraph: {
//     title: 'About Us | Our Story, Vision, and Commitment',
//     description: 'Discover our journey, passion, and commitment to delivering exceptional culinary experiences. Learn about our team, values, and unique approach.',
//     type: 'website'
//   },
//   alternates: {
//     canonical: '/about'
//   }
// };

export default AboutPage;