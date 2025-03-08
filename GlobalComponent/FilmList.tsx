"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import movie_image_1 from "../public/movie_image_1.jpeg";
import movie_image_2 from "../public/movie_image_2.jpeg";
import movie_image_3 from "../public/movie_image_3.jpeg";
import movie_image_4 from "../public/movie_image_4.jpeg";
import movie_image_5 from "../public/movie_image_5.jpeg";
import movie_image_6 from "../public/movie_image_6.jpeg";
import movie_image_7 from "../public/movie_image_7.jpeg";
import movie_image_8 from "../public/movie_image_8.jpeg";
import movie_image_9 from "../public/movie_image_9.jpeg";
import movie_image_10 from "../public/movie_image_10.jpeg";
import movie_image_11 from "../public/movie_image_11.jpeg";
import movie_image_12 from "../public/movie_image_12.jpeg";
import movie_image_13 from "../public/movie_image_13.jpeg";
import movie_image_14 from "../public/movie_image_14.jpeg";
import movie_image_15 from "../public/movie_image_15.jpg";
import movie_image_16 from "../public/movie_image_16.jpeg";
import movie_image_17 from "../public/movie_image_17.jpeg";
import movie_image_18 from "../public/movie_image_18.jpeg";
import movie_image_19 from "../public/movie_image_19.jpeg";
import movie_image_20 from "../public/movie_image_20.jpeg";

const films = [
  { name: "Bhool Bhulaiya 2", poster: movie_image_1 },
  { name: "Gadar 2", poster: movie_image_2 },
  { name: "Tubelight", poster: movie_image_3 },
  { name: "83 The Film", poster: movie_image_4 },
  { name: "Animal", poster: movie_image_5 },
  { name: "Sardar ka Grandson", poster: movie_image_6 },
  { name: "De De Pyaar De", poster: movie_image_7 },
  { name: "Pal Pal Dil Ke Pass", poster: movie_image_8 },
  { name: "The Night Manager", poster: movie_image_9 },
  { name: "HIT the First Case", poster: movie_image_10 },
  { name: "Kartikeya 2", poster: movie_image_11 },
  { name: "Hero", poster: movie_image_12 },
  { name: "Bang Bang", poster: movie_image_13 },
  { name: "Mary Com", poster: movie_image_14 },
  { name: "Brahmastra", poster: movie_image_15 },
  { name: "Mumbai Diaries 26/11", poster: movie_image_16 },
  { name: "Shaitaan", poster: movie_image_17 },
  { name: "Satyamev Jayate 2", poster: movie_image_18 },
  { name: "Mrs. Chatterjee", poster: movie_image_19 },
  { name: "Yeh Jawaani Hai Deewani", poster: movie_image_20 },
];

const FilmList = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleFilms = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % Math.max(films.length - visibleFilms + 1, 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(films.length - visibleFilms, 0) : prevIndex - 1
    );
  };

  // Auto scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-50 mb-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-800">
        Bollywood Films
        <span className="block text-lg font-normal text-amber-600 mt-2">
          Curated by The Savoury Soiree
        </span>
      </h1>
      
      <div className="relative">
        {/* Previous button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-amber-800" />
        </button>

        {/* Film container */}
        <div className="overflow-hidden mx-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleFilms)}%)`,
            }}
          >
            {films.map((film, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-1/5 px-2"
              >
                <div 
                  className="film-card h-72 p-4 border rounded-lg shadow-md bg-cover bg-center text-center hover:bg-gray-100 transition-all duration-300 relative group"
                  style={{ 
                    backgroundImage: `url(${film.poster.src})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg" />
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center p-4">
                    {film.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-amber-800" />
        </button>
      </div>
    </div>
  );
};

export default FilmList;