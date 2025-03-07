"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface EventCardProps {
  item: {
    image: string;
    text: string;
    alt: string;
    description: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ item }) => {
  const router = useRouter();

  const navigateAndScroll = (path: string) => {
    router.push(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group" role="article">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.alt}
          width={400}
          height={256}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <button
            onClick={() => navigateAndScroll("/events")}
            className="bg-[#f1a986] text-white px-6 py-2 rounded-lg 
              invisible opacity-0 group-hover:visible group-hover:opacity-100
              transform -translate-y-2 group-hover:translate-y-0
              transition-all delay-150 duration-300
              hover:bg-[#e08b66]"
            aria-label={`Read more about ${item.text}`}
          >
            Read More
          </button>
        </div>
        <p className="text-white absolute bottom-0 text-xl font-semibold 
          px-3 py-2 text-center w-full bg-black/80
          invisible opacity-0 group-hover:visible group-hover:opacity-100
          transform translate-y-2 group-hover:translate-y-0
          transition-all delay-300 duration-300
          rounded-b-lg"
        >
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default EventCard;